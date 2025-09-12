import { NewsletterTable } from "@/components/dashboard/newsletter/NewsletterTable";

const page = () => {
  return (
    <main className="py-4">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex  items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-2xl font-medium ">
            📧 Newsletter Management
          </div>
          {/* <h1 className="text-3xl md:text-4xl font-bold text-balance bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Newsletter Subscribers
          </h1> */}
          <p className="text-lg text-slate-600  leading-relaxed">
            Manage and engage with your newsletter community. Track
            subscriptions, send targeted emails, and grow your audience.
          </p>
        </div>
        <NewsletterTable />
      </div>
    </main>
  );
};

export default page;
