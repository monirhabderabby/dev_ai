// components
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }) => {
    // js variables
    const apiLimitCount = await getApiLimitCount();
    const isPro = await checkSubscription();

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 bg-gray-900">
                <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
            </div>
            <div className="md:pl-72">
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
