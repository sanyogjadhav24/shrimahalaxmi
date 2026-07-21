type ReportLovableErrorOptions = {
  boundary?: string;
};

export function reportLovableError(error: unknown, options?: ReportLovableErrorOptions) {
  if (options?.boundary) {
    console.error(`[${options.boundary}]`, error);
    return;
  }

  console.error(error);
}
