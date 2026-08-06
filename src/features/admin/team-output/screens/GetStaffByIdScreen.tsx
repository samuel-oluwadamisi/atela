'use client'
import { StaffMember, TotalTaskListType } from '@/mock/staff'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { ArrowLeft, Mail, Phone, Calendar, Wallet, ClipboardList, TrendingUp, TrendingDown, Pencil, UserX, LucideIcon, } from "lucide-react";
import Link from 'next/link';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '../../components/DataTable';
// import { useGetStaffById } from '../hooks/useStaff'


type OutputPoint = StaffMember["recentOutputHistory"][number];
type StaffStatus = StaffMember["status"];

const theme = {
  terra: "#C1785A",
  terraDark: "#9A5D44",
  linen: "#F7F4F0",
  ink: "#2B2521",
  muted: "#8A7F76",
  border: "#E7E0D8",
  white: "#FFFFFF",
  green: "#5A7D5A",
  greenBg: "#EBF1E9",
  amber: "#B8863F",
  amberBg: "#F7EEDF",
  gray: "#8A7F76",
  grayBg: "#EFEBE6",
};

const stageColors: Record<string, { bg: string; text: string }> = {
  "Pattern Drafting": { bg: "#F0E6E0", text: "#9A5D44" },
  Cutting: { bg: "#E6EEF7", text: "#3B5D82" },
  Sewing: { bg: "#EBF1E9", text: "#4E6E4E" },
  Finishing: { bg: "#F7EEDF", text: "#8A6524" },
};

const statusStyles: Record<StaffStatus, { bg: string; text: string }> = {
  Active: { bg: theme.greenBg, text: theme.green },
  "On Leave": { bg: theme.amberBg, text: theme.amber },
  Inactive: { bg: theme.grayBg, text: theme.gray },
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

function formatShortDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
}

function initials(first: string, last: string): string {
  return `${first[0]}${last[0]}`.toUpperCase();
}

function Avatar({ firstName, lastName, size = 56 }: { firstName: string; lastName: string; size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: theme.terra,
        color: theme.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Serif Display', serif",
        fontSize: size * 0.36,
        flexShrink: 0,
      }}
    >
      {initials(firstName, lastName)}
    </div>
  );
}

function StatusBadge({ status }: { status: StaffStatus }) {
  const style = statusStyles[status] ?? statusStyles.Active;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 12px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 500,
        background: style.bg,
        color: style.text,
      }}
    >
      {status}
    </span>
  );
}

function MetricCard({
  label,
  value,
  icon: Icon,
  delta,
}: {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  delta?: number | null;
}) {
  return (
    <div
      style={{
        background: theme.white,
        border: `1px solid ${theme.border}`,
        borderRadius: 12,
        padding: "16px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: 13, color: theme.muted }}>{label}</span>
        {Icon && <Icon size={16} color={theme.terra} strokeWidth={2} />}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span style={{ fontSize: 24, fontWeight: 600, color: theme.ink }}>
          {value}
        </span>
        {delta !== undefined && delta !== null && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 2,
              fontSize: 12,
              fontWeight: 500,
              color: delta >= 0 ? theme.green : "#B25050",
            }}
          >
            {delta >= 0 ? (
              <TrendingUp size={13} strokeWidth={2.2} />
            ) : (
              <TrendingDown size={13} strokeWidth={2.2} />
            )}
            {Math.abs(delta)}%
          </span>
        )}
      </div>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center  gap-2 mb-1">
        <Icon size={16} color={theme.muted} strokeWidth={2} style={{ marginTop: 2 }} />
        <div style={{ fontSize: 12, color: theme.muted }}>{label}</div>
      </div>
            
        <p style={{ fontSize: 14, color: theme.ink, fontWeight: 500 }}>
          {value}
        </p>
    </div>
  );
}

function OutputChart({ data }: { data: OutputPoint[] }) {
  const chartData = data.map((d) => ({
    day: formatShortDate(d.date),
    output: d.count,
  }));

  return (
    <div style={{ width: "100%", height: 160 }}>
      <ResponsiveContainer>
        <BarChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke={theme.border} />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 11, fill: theme.muted }}
            axisLine={{ stroke: theme.border }}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: theme.muted }}
            axisLine={false}
            tickLine={false}
            allowDecimals={false}
          />
          <Tooltip
            cursor={{ fill: theme.linen }}
            contentStyle={{
              background: theme.white,
              border: `1px solid ${theme.border}`,
              borderRadius: 8,
              fontSize: 12,
            }}
          />
          <Bar dataKey="output" fill={theme.terra} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}


function Card({
  title,
  action,
  children,
}: {
  title?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: theme.white,
        border: `1px solid ${theme.border}`,
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      {title && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 18px",
            borderBottom: `1px solid ${theme.border}`,
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: 15,
              fontWeight: 600,
              color: theme.ink,
            }}
          >
            {title}
          </h3>
          {action}
        </div>
      )}
      <div style={{ padding: title ? "4px 0 4px" : 18 }}>{children}</div>
    </div>
  );
}

export const columns: ColumnDef<TotalTaskListType>[] = [
  {
    accessorKey: "clientName",
    header: "Customer",
  },
  {
    accessorKey: "dress",
    header: "Dress",
  },
  {
    accessorKey: "dueDate",
    header: "Deadline",
    cell: ({ getValue }) => {
      const date = getValue<string>();
      return <p className="text-center">{formatShortDate(date)}</p>;
    }
  },
  {
    accessorKey: "commission",
    header: "Commission",
    cell: ({getValue}) => {
      const value = getValue<number>();
      return <p className="text-center">{formatCurrency(value)}</p>;
    }
  },
  {
    accessorKey: "orderStatus",
    header: "Status",
    cell: ({ getValue }) => {
      const stage = getValue<string>();

      const colors: Record<string, string> = {
        Rejected: "bg-[#3A5A8C1A] text-[#3A5A8C]",
        Active: "bg-[#D4A3731A] text-[#D4A373]",
        Completed: "bg-[#4A7C591A] text-[#4A7C59]",
      };

      const colorClass = colors[stage] ?? "bg-[#F3F4F6] text-[#374151]";

      return (
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${colorClass}`}
        >
          {stage}
        </div>
      );
    },
  },
];

const GetStaffByIdScreen = ({ staffMember: staff }: { staffMember: StaffMember }) => {
  // const { data: staffData, isPending } = useGetStaffById(id)

  const delta =
    staff.lastMonth > 0
      ? Math.round(((staff.thisMonth - staff.lastMonth) / staff.lastMonth) * 100)
      : null;

  return (
    <div
      style={{
        background: theme.linen,
        minHeight: "100vh",
        padding: "28px 32px",
        color: theme.ink,
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700&display=swap"
      />

      {/* header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 24,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              border: `1px solid ${theme.border}`,
              background: theme.white,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
           <Link href="/admin/team-output">
             <ArrowLeft size={17} color={theme.ink} />
           </Link>
          </button>
          <Avatar firstName={staff.firstName} lastName={staff.lastName} />
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <h1 className='text-2xl font-black text-[#2A1F1A]'>
                {staff.firstName} {staff.lastName}
              </h1>
              <StatusBadge status={staff.status} />
            </div>
            <p style={{ margin: "2px 0 0", color: theme.muted, fontSize: 14 }}>
              {staff.role} · {staff.paymentType}
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "9px 16px",
              borderRadius: 8,
              border: `1px solid ${theme.border}`,
              background: theme.white,
              fontSize: 14,
              color: theme.ink,
              cursor: "pointer",
            }}
          >
            <Pencil size={15} /> Edit
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "9px 16px",
              borderRadius: 8,
              border: "1px solid transparent",
              background: theme.ink,
              color: theme.white,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            <UserX size={15} /> Deactivate
          </button>
        </div>
      </div>

      {/* two column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: 20,
          alignItems: "start",
        }}
      >
        {/* left column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Card>
            <div className='flex items-center justify-between gap-3' >
              <InfoRow icon={Mail} label="Email" value={staff.email} />
              <InfoRow icon={Phone} label="Phone" value={staff.phone} />
              <InfoRow icon={Calendar} label="Date joined" value={formatDate(staff.dateJoined)} />
            </div>
          </Card>

          <DataTable columns={columns} data={staff.totalTaskList} />

        </div>

        {/* right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            <MetricCard label="Active tasks" value={staff.activeTasks} icon={ClipboardList} />
            <MetricCard label="Today's output" value={staff.output} icon={TrendingUp} />
          </div>

          <MetricCard
            label="This month vs last month"
            value={formatCurrency(staff.thisMonth)}
            delta={delta}
          />

          <Card title="Output, last 7 days">
            <div style={{ padding: "8px 18px 16px" }}>
              <OutputChart data={staff.recentOutputHistory} />
            </div>
          </Card>

          <Card>
            <div style={{ padding: "6px 18px 14px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <Wallet size={16} color={theme.terra} />
                <span style={{ fontSize: 13, color: theme.muted }}>
                  Earnings this month
                </span>
              </div>
              <div style={{ fontSize: 26, fontWeight: 600, color: theme.ink }}>
                {formatCurrency(staff.totalEarningsThisMonth)}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 12,
                  paddingTop: 12,
                  borderTop: `1px solid ${theme.border}`,
                }}
              >
                <span style={{ fontSize: 13, color: theme.muted }}>Last month</span>
                <span style={{ fontSize: 15, fontWeight: 500, color: theme.ink }}>
                  {formatCurrency(staff.lastMonth)}
                </span>
              </div>

              {staff.paymentType === "Commission" && (
                <p style={{ margin: "8px 0 0", fontSize: 12, color: theme.muted, lineHeight: 1.5 }}>
                  Calculated per completed piece, based on garment complexity.
                </p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default GetStaffByIdScreen