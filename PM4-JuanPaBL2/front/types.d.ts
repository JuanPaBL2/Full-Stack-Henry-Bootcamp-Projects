// types.d.ts

declare namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & SplineViewerProps, HTMLElement>;
    }
  }

interface SplineViewerProps {
    url: string;
}
  