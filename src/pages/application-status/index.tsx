import { SecondaryNavbar, Image, Badge, Pagination, ArrowUpRight, useState } from "@/lib/imports";

type Application = {
  id: string;
  name: string;
  company: string;
  avatar: string;
  projectTitle: string;
  appliedDate: string;
  type: string;
  status: "Shortlisted" | "Rejected" | "Submitted";
};

const applications: Application[] = [
  {
    id: "1",
    name: "Nana",
    company: "Abc Enterprises",
    avatar: "/avatar-placeholder.png",
    projectTitle: "Film Commercial",
    appliedDate: "25/01/2025",
    type: "Casting call",
    status: "Shortlisted",
  },
  {
    id: "2",
    name: "Nana",
    company: "Abc Enterprises",
    avatar: "/avatar-placeholder.png",
    projectTitle: "Film Commercial",
    appliedDate: "25/01/2025",
    type: "Live Virtual Audition",
    status: "Shortlisted",
  },
  {
    id: "3",
    name: "Nana",
    company: "Abc Enterprises",
    avatar: "/avatar-placeholder.png",
    projectTitle: "Film Commercial",
    appliedDate: "25/01/2025",
    type: "Live Virtual Audition",
    status: "Rejected",
  },
  {
    id: "4",
    name: "Nana",
    company: "Abc Enterprises",
    avatar: "/avatar-placeholder.png",
    projectTitle: "Film Commercial",
    appliedDate: "25/01/2025",
    type: "Live Virtual Audition",
    status: "Rejected",
  },
  {
    id: "5",
    name: "Nana",
    company: "Abc Enterprises",
    avatar: "/avatar-placeholder.png",
    projectTitle: "Film Commercial",
    appliedDate: "25/01/2025",
    type: "Live Virtual Audition",
    status: "Rejected",
  },
  {
    id: "6",
    name: "Nana",
    company: "Abc Enterprises",
    avatar: "/avatar-placeholder.png",
    projectTitle: "Film Commercial",
    appliedDate: "25/01/2025",
    type: "Live Virtual Audition",
    status: "Shortlisted",
  },
  {
    id: "7",
    name: "Nana",
    company: "Abc Enterprises",
    avatar: "/avatar-placeholder.png",
    projectTitle: "Film Commercial",
    appliedDate: "25/01/2025",
    type: "Live Virtual Audition",
    status: "Rejected",
  },
];

function statusColors(status: Application["status"]) {
  if (status === "Shortlisted") return { color: "text-emerald-700", bg: "bg-emerald-200" };
  if (status === "Rejected") return { color: "text-red-600", bg: "bg-red-200" };
  return { color: "text-gray-700", bg: "bg-gray-200" };
}

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;
  const totalPages = Math.max(1, Math.ceil(applications.length / pageSize));
  const visible = applications.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  return (
    <div className="min-h-dvh bg-gray-50">
      <SecondaryNavbar />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">View Application Status</h1>
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-600">Sort</label>
            <select className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:outline-none">
              <option>Date</option>
              <option>Project title</option>
              <option>Status</option>
            </select>
          </div>
        </div>

        <div className="mt-6 divide-y divide-gray-100 rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
          {visible.map((app) => {
            const s = statusColors(app.status);
            return (
              <div key={app.id} className="p-4 sm:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Image src={app.avatar} alt={app.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{app.name}</div>
                      <div className="text-xs text-gray-500">{app.company}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Badge label={app.status} color={s.color} bgColor={s.bg} />
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50">
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="text-sm text-gray-900">
                    <span className="font-semibold">Project title:</span>
                    <span className="ml-2">{app.projectTitle}</span>
                  </div>
                  <div className="text-sm text-gray-900">
                    <span className="font-semibold">Applied Date:</span>
                    <span className="ml-2">{app.appliedDate}</span>
                  </div>
                  <div className="text-sm text-gray-900">
                    <span className="font-semibold">Type:</span>
                    <span className="ml-2">{app.type}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>
      </main>
    </div>
  );
}
