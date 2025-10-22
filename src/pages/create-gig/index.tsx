import { SecondaryNavbar, CreateGigForm } from "@/lib/imports";

export default function Page() {
  return (
    <div className="min-h-dvh bg-gray-50">
      <SecondaryNavbar />

      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-semibold text-gray-900">Create a Elite Model Gig</h1>
        <CreateGigForm className="mt-8" ctaHref="/model-hub" ctaLabel="Create a Gig" />
      </main>
    </div>
  );
}
