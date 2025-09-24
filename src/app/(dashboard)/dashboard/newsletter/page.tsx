import { NewsletterTable } from "@/components/dashboard/newsletter/NewsletterTable";

const Page = () => {
  return (
    <main className="py-4 px-2 sm:px-4 lg:px-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-2">
          <div
            className="inline-flex flex-wrap items-center px-3 sm:px-4 py-2 
            bg-blue-100 text-blue-800 rounded-full 
            text-lg sm:text-xl md:text-2xl font-medium"
          >
            📧 Newsletter Management
          </div>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Manage and engage with your newsletter community. Track
            subscriptions, send targeted emails, and grow your audience.
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <NewsletterTable />
        </div>
      </div>
    </main>
  );
};

export default Page;
