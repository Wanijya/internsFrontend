import Wrapper from "@/components/wrapper/Wrapper";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Create Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
