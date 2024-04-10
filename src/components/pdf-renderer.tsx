"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Document, Page, pdfjs } from "react-pdf";
import { useResizeDetector } from "react-resize-detector";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { cn } from "@/lib/utils";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type PDFRendererProps = {
  url: string;
};

export const PDFRenderer = ({ url }: PDFRendererProps) => {
  const { width, ref } = useResizeDetector();

  const [numPages, setNumPages] = useState<number | undefined>(undefined);
  const [currPage, setCurrPage] = useState(1);

  const CustomPageValidator = z.object({
    page: z
      .string()
      .refine((num) => Number(num) > 0 && Number(num) <= numPages!),
  });

  type TCustomPageValidator = z.infer<typeof CustomPageValidator>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TCustomPageValidator>({
    defaultValues: {
      page: "1",
    },
    resolver: zodResolver(CustomPageValidator),
  });

  const handlePageSubmit = ({ page }: TCustomPageValidator) => {
    setCurrPage(Number(page));
    setValue("page", String(page));
  };

  return (
    <div className="w-full bg-white rounded-md shadow flex flex-col items-center">
      {/* topbar */}
      <div className="h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2">
        <div className="flex items-center gap-1.5">
          {/* prev page */}
          <Button
            disabled={currPage <= 1}
            aria-disabled={currPage <= 1}
            onClick={() =>
              setCurrPage((prevPage) => (prevPage - 1 > 1 ? prevPage - 1 : 1))
            }
            variant="ghost"
            aria-label="Previous Page"
            title="Previous Page"
          >
            <ChevronDown className="h-4 w-4" />
          </Button>

          {/* current page */}
          <div className="flex items-center gap-1.5">
            <Input
              {...register("page")}
              className={cn(
                "w-12 h-8",
                errors.page && "focus-visible:ring-red-500"
              )}
              aria-label="Page number"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(handlePageSubmit)();
                }
              }}
              onBlur={() => handleSubmit(handlePageSubmit)()}
            />
            <p className="text-zinc-700 text-sm space-x-1">
              <span>/</span>
              <span>{numPages ?? "X"}</span>
            </p>
          </div>

          {/* next page */}
          <Button
            disabled={numPages === undefined || currPage === numPages}
            aria-disabled={numPages === undefined || currPage === numPages}
            onClick={() =>
              setCurrPage((prevPage) =>
                prevPage + 1 > numPages! ? numPages! : prevPage + 1
              )
            }
            variant="ghost"
            aria-label="Next Page"
            title="Next Page"
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* show pdf content */}
      <div className="flex-1 w-full max-h-screen">
        <div ref={ref}>
          <Document
            loading={
              <div className="flex justify-center">
                <Loader2 className="my-24 h-6 w-6 animate-spin" />
              </div>
            }
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={() =>
              toast.error("Error loading PDF.", {
                description: "Please try again.",
              })
            }
            file={url}
            className="max-h-full"
          >
            <Page pageNumber={currPage} width={width ? width : 1} />
          </Document>
        </div>
      </div>
    </div>
  );
};
