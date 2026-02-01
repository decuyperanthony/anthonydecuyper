import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

const AppleIcon = () => {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f8fafc",
          borderRadius: 36,
          fontWeight: 700,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
};

export default AppleIcon;
