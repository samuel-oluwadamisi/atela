
import { ClientProfile, PastOrder } from "@/mock/clients";
import { IoArrowBack, IoMail, IoCall, IoLocationOutline, IoCalendarOutline, IoPencil } from "react-icons/io5";


type ColorTypes = {
  bg: string;
  text: string;
  dot: string;
};

export const orderStatusColors: Record<string, ColorTypes> = {
  Completed: {
    bg: "bg-[#4A7C591A]",
    text: "text-[#4A7C59]",
    dot: "bg-[#4A7C59]",
  },
  Cancelled: {
    bg: "bg-[#D4A3731A]",
    text: "text-[#D4A373]",
    dot: "bg-[#D4A373]",
  },
};


function formatCurrency(value: number): string {
  return `₦${value.toLocaleString("en-NG")}`;
}
 
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
 
function initials(name: string): string {
  const parts = name.trim().split(" ");
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return `${first}${last}`.toUpperCase();
}
 
function StatusPill({ status }: { status: PastOrder["status"] }) {
  const style = orderStatusColors[status] ?? orderStatusColors.Completed;
  return (
    <span
      className={`inline-flex items-center gap-1.5 w-fit px-2 py-0.5 rounded-full text-xs font-bold ${style.bg} ${style.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      {status}
    </span>
  );
}
 
function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon className="w-4 h-4 text-[#6E5F54] mt-0.5 shrink-0" />
      <div>
        <p className="text-xs text-[#6E5F54]">{label}</p>
        <p className="text-sm font-bold text-[#2A1F1A]">{value}</p>
      </div>
    </div>
  );
}
 
function SummaryCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-white border border-[#E8E1D9] rounded-xl px-4 py-3 flex flex-col gap-1">
      <p className="text-xs text-[#6E5F54]">{label}</p>
      <p className="text-xl font-black text-[#2A1F1A]">{value}</p>
    </div>
  );
}
 
function OrderCard({ order }: { order: PastOrder }) {
  return (
    <div className="border border-[#E8E1D9] rounded-xl px-4 py-3 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-[#2A1F1A]">{order.garmentType}</p>
          <p className="text-xs text-[#6E5F54] mt-0.5">{order.description}</p>
        </div>
        <StatusPill status={order.status} />
      </div>
      <div className="flex items-center justify-between text-xs text-[#6E5F54] pt-2 border-t border-[#E8E1D9]">
        <span>Qty {order.quantity}</span>
        <span>
          {order.status === "Completed" ? "Completed " : "Cancelled "}
          {formatDate(order.completedDate)}
        </span>
        <span className="font-bold text-[#2A1F1A]">
          {order.amount > 0 ? formatCurrency(order.amount) : "—"}
        </span>
      </div>
    </div>
  );
}
 
export default function GetClientByIdScreen({
  clientProfile: client,
}: {
  clientProfile: ClientProfile;
}) {
  const completedOrders = client.orderHistory.filter((o) => o.status === "Completed");
  const totalSpent = completedOrders.reduce((sum, o) => sum + o.amount, 0);
  const lastOrder = client.orderHistory[0];
 
  return (
    <div className="bg-[#F7F4F0] min-h-screen px-8 py-7">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <button className="w-9 h-9 rounded-lg border border-[#E8E1D9] bg-white flex items-center justify-center">
            <IoArrowBack className="w-4 h-4 text-[#2A1F1A]" />
          </button>
          <div className="w-14 h-14 rounded-full bg-[#C1785A] text-white flex items-center justify-center text-lg font-black shrink-0">
            {initials(client.clientName)}
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#2A1F1A]">{client.clientName}</h1>
            <p className="text-sm text-[#6E5F54]">
              Client since {formatDate(client.dateAdded)}
            </p>
          </div>
        </div>
 
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold border border-[#E8E1D9] rounded-xl text-[#2A1F1A] hover:border-[#C1785A] transition-colors">
            <IoPencil className="w-4 h-4" /> Edit
          </button>
          <button className="px-4 py-2 text-sm font-bold text-white bg-[#C1785A] rounded-xl hover:bg-[#9A5D44] transition-colors">
            New order
          </button>
        </div>
      </div>
 
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-5 items-start">
        <div className="flex flex-col gap-5">
          <div className="bg-white border border-[#E8E1D9] rounded-xl px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoRow icon={IoMail} label="Email" value={client.clientEmail} />
            <InfoRow icon={IoCall} label="Phone" value={client.clientPhone} />
            <InfoRow icon={IoLocationOutline} label="Address" value={client.clientAddress} />
            <InfoRow
              icon={IoCalendarOutline}
              label="Last order"
              value={lastOrder ? formatDate(lastOrder.completedDate) : "No orders yet"}
            />
          </div>
 
          <div className="bg-white border border-[#E8E1D9] rounded-xl overflow-hidden">
            <div className="px-5 py-3.5 border-b border-[#E8E1D9]">
              <h3 className="text-sm font-black text-[#2A1F1A]">Order history</h3>
            </div>
            <div className="p-5 flex flex-col gap-3">
              {client.orderHistory.length === 0 ? (
                <p className="text-sm text-[#6E5F54] text-center py-6">
                  No orders yet for this client.
                </p>
              ) : (
                client.orderHistory.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))
              )}
            </div>
          </div>
        </div>
 
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-3">
            <SummaryCard label="Total orders" value={client.orderHistory.length} />
            <SummaryCard label="Completed" value={completedOrders.length} />
          </div>
 
          <div className="bg-white border border-[#E8E1D9] rounded-xl px-5 py-4">
            <p className="text-xs text-[#6E5F54] mb-1">Total spent</p>
            <p className="text-2xl font-black text-[#2A1F1A]">{formatCurrency(totalSpent)}</p>
            <p className="text-xs text-[#6E5F54] mt-1.5">
              Across {completedOrders.length} completed order
              {completedOrders.length === 1 ? "" : "s"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}