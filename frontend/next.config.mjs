const nextConfig = {
  turbopack: {
    // A stray lockfile higher up the tree confuses workspace root detection.
    root: import.meta.dirname,
  },
};

export default nextConfig;
