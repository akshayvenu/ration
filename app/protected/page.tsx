import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Calendar, Package, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/login");
  }

  // Mock data - replace with actual API calls
  const userName = user.email?.split('@')[0] || "User";
  const cardNumber = "APL 7280012";
  
  const stockData = [
    { name: "Rice", nameHindi: "चावल", quantity: "150 kg", available: true, updated: "2 hours ago" },
    { name: "Wheat", nameHindi: "गेहूं", quantity: "0 kg", available: false, updated: "1 day ago" },
    { name: "Sugar", nameHindi: "चीनी", quantity: "80 kg", available: true, updated: "3 hours ago" },
    { name: "Kerosene", nameHindi: "मिट्टी का तेल", quantity: "200 liters", available: true, updated: "2 hours ago" },
  ];

  const quotaData = [
    { item: "Rice", collected: 0, remaining: 5, total: 5, unit: "kg" },
    { item: "Wheat", collected: 0, remaining: 5, total: 5, unit: "kg" },
    { item: "Sugar", collected: 0, remaining: 1, total: 1, unit: "kg" },
    { item: "Kerosene", collected: 0, remaining: 2, total: 2, unit: "L" },
  ];

  const notifications = [
    { message: "Rice stock available - Visit shop before 5 PM", time: "10:30 AM", type: "success" },
    { message: "Wheat stock running low - Limited quantity available", time: "Yesterday", type: "warning" },
    { message: "Your token T003 is confirmed for 12:00 PM slot", time: "2 hours ago", type: "info" },
  ];

  return (
    <div className="flex-1 w-full flex flex-col gap-6">
      {/* Header Section */}
      <div id="home" className="scroll-mt-20 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-700 dark:to-orange-800 rounded-xl p-5 md:p-8 text-white shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* User Info */}
          <div className="flex-1">
            <h1 className="text-xl md:text-3xl font-bold mb-3">
              राम कुमार / Ram Kumar
            </h1>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-xs md:text-sm font-semibold tracking-wide">{cardNumber}</span>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[100px] md:min-w-[120px]">
              <div className="text-2xl md:text-4xl font-bold leading-none mb-1.5">3/4</div>
              <div className="text-xs md:text-sm opacity-90 whitespace-nowrap">Items Available</div>
            </div>
            
          </div>
        </div>
      </div>



      {/* Stock Status Section */}
      <div id="stock" className="scroll-mt-20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <Package className="h-6 w-6 text-orange-600 dark:text-orange-500" />
            Stock Status
          </h2>
          <button className="text-sm text-orange-600 dark:text-orange-500 hover:underline flex items-center gap-1">
            <TrendingUp className="h-4 w-4" />
            Refresh
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {stockData.map((item, idx) => (
            <Card 
              key={idx} 
              className={`${
                item.available 
                  ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900" 
                  : "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900"
              }`}
            >
              <CardHeader className="pb-2 p-3 md:p-6 md:pb-3">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base md:text-lg truncate">{item.name}</CardTitle>
                      <CardDescription className="text-xs">{item.nameHindi}</CardDescription>
                    </div>
                    <span className={`text-[10px] md:text-xs font-semibold px-1.5 md:px-2 py-0.5 md:py-1 rounded-full whitespace-nowrap flex-shrink-0 ${
                      item.available 
                        ? "bg-green-600 text-white" 
                        : "bg-red-600 text-white"
                    }`}>
                      {item.available ? "Available" : "Out"}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-3 pt-0 md:p-6 md:pt-0">
                <div className="text-xl md:text-2xl font-bold mb-1">{item.quantity}</div>
                <div className="text-[10px] md:text-xs text-muted-foreground">
                  Updated: {item.updated}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Monthly Quota Section */}
      <Card id="quota" className="scroll-mt-20">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Package className="h-5 w-5 text-orange-600 dark:text-orange-500" />
            Monthly Quota
          </CardTitle>
          <CardDescription>Your allocation for this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {quotaData.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-sm md:text-base">{item.item}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.collected}/{item.total} {item.unit}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                  <div 
                    className="bg-orange-500 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${(item.collected / item.total) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Collected: {item.collected} {item.unit}</span>
                  <span>Remaining: {item.remaining} {item.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Updates/Notifications */}
      <Card id="alerts" className="scroll-mt-20">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Bell className="h-5 w-5 text-orange-600 dark:text-orange-500" />
            Recent Updates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {notifications.map((notif, idx) => (
              <div 
                key={idx}
                className={`flex gap-3 p-4 rounded-lg ${
                  notif.type === "success" 
                    ? "bg-green-50 dark:bg-green-950/20" 
                    : notif.type === "warning"
                    ? "bg-orange-50 dark:bg-orange-950/20"
                    : "bg-blue-50 dark:bg-blue-950/20"
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  {notif.type === "success" ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <AlertCircle className={`h-5 w-5 ${
                      notif.type === "warning" ? "text-orange-600" : "text-blue-600"
                    }`} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{notif.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
