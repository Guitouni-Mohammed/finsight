/** @type {import('next').NextConfig} */
const nextConfig = {
  // Native / WASM packages used by the extraction pipeline run as plain Node modules.
  serverExternalPackages: ["@napi-rs/canvas", "pdfjs-dist", "tesseract.js"],
  poweredByHeader: false,
  // Hide the floating Next.js badge in development so it does not cover the interface.
  devIndicators: false,
};

export default nextConfig;
