type PageCanvasProps = {
  children: React.ReactNode;
};

export function PageCanvas({ children }: PageCanvasProps) {
  return (
    <div className="relative min-h-screen bg-page-canvas">
      <div aria-hidden className="page-canvas-layers pointer-events-none fixed inset-0 z-0" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
