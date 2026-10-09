import './globals.css';
import './premium.css';

export const metadata = {
  title: 'সোনাময়ী ইউনাইটেড ফুটবল ক্লাব | এক ক্লাব। এক সমাজ।',
  description: 'সোনাময়ী ইউনাইটেড ফুটবল ক্লাবের নিজস্ব ওয়েবসাইট। আমাদের ক্লাব, আসন্ন ম্যাচের সূচি এবং ফুটবল পরিবারের সর্বশেষ খবর জানুন।',
};

export default function RootLayout({ children }) {
  return <html lang="bn"><body>{children}</body></html>;
}
