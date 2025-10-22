"use client";

import React, { useMemo, useState } from "react";
import GradientButton from "@/components/buttons/GradientButton";
import Field from "@/components/forms/Field";
import Input from "@/components/forms/Input";
import Dropzone from "@/components/forms/Dropzone";
import {
  Images,
  UploadCloud,
  Video,
  MapPin,
  ListChecks,
  Users,
  BadgeDollarSign,
  Film,
  PackageCheck,
  ShieldCheck,
  Link as LinkIcon,
  Shirt,
  CalendarDays,
  User,
  Hourglass,
  Ruler,
  Sparkles,
  Star,
  Scale,
  Eye,
  Scissors,
} from "lucide-react";

export default function CastCallingForm() {
  const [overview, setOverview] = useState("");
  const [brief, setBrief] = useState({
    location: "",
    details: "",
    roles: "",
    compensation: "",
    genre: "",
    deliverables: "",
    usage: "",
    references: "",
    wardrobe: "",
    deadline: "",
  });
  const [eligibility, setEligibility] = useState({
    gender: "",
    age: "",
    height: "",
    skinTone: "",
    experience: "",
    location: "",
  });
  const [portfolio, setPortfolio] = useState({
    weight: "",
    bustChest: "",
    waist: "",
    hips: "",
    bottomSize: "",
    eyeColor: "",
    hairColor: "",
    shoeSize: "",
    dress: "",
    shirt: "",
  });
  const [photos, setPhotos] = useState<File[]>([]);
  const [videos, setVideos] = useState<File[]>([]);

  const canSubmit = useMemo(() => overview.trim().length > 0, [overview]);

  function handleBriefChange<K extends keyof typeof brief>(key: K, val: string) {
    setBrief((p) => ({ ...p, [key]: val }));
  }
  function handleEligibilityChange<K extends keyof typeof eligibility>(key: K, val: string) {
    setEligibility((p) => ({ ...p, [key]: val }));
  }
  function handlePortfolioChange<K extends keyof typeof portfolio>(key: K, val: string) {
    setPortfolio((p) => ({ ...p, [key]: val }));
  }
  function onPhotoFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const f = Array.from(e.target.files ?? []);
    setPhotos(f);
  }
  function onVideoFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const f = Array.from(e.target.files ?? []);
    setVideos(f);
  }
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = { overview, brief, eligibility, portfolio, photos: photos.map((f) => f.name), videos: videos.map((f) => f.name) };
    console.log("Cast Call Payload", payload);
    alert("Cast call submitted (check console)");
  }

  return (
    <main className="min-h-dvh  text-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-8">
        {/* <h1 className="text-2xl font-semibold text-gray-900">Cast Calling Form</h1> */}
        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-8">
          <section className="rounded-2xl  p-6 ">
            <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
            <p className="mt-1 text-sm text-gray-500">Write your project description</p>
            <textarea value={overview} onChange={(e) => setOverview(e.target.value)} rows={5} className="mt-4 w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-indigo-400" />
          </section>

          <section className="rounded-2xl  p-6 ">
            <div className="mt-6 grid grid-cols-1 gap-4">
              <Field label="Shooting Location/City" icon={<MapPin className="h-3.5 w-3.5" />}> <Input value={brief.location} onChange={(v) => handleBriefChange("location", v)} placeholder="Enter city or exact location" /> </Field>
              <Field label="Shoot Details" icon={<ListChecks className="h-3.5 w-3.5" />}> <Input value={brief.details} onChange={(v) => handleBriefChange("details", v)} placeholder="Dates, hours, call time" /> </Field>
              <Field label="Roles" icon={<Users className="h-3.5 w-3.5" />}> <Input value={brief.roles} onChange={(v) => handleBriefChange("roles", v)} placeholder="Lead, supporting, extras" /> </Field>
              <Field label="Compensation" icon={<BadgeDollarSign className="h-3.5 w-3.5" />}> <Input value={brief.compensation} onChange={(v) => handleBriefChange("compensation", v)} placeholder="Paid/Unpaid, rate, perks" /> </Field>
              <Field label="Genre Type" icon={<Film className="h-3.5 w-3.5" />}> <Input value={brief.genre} onChange={(v) => handleBriefChange("genre", v)} placeholder="Commercial, fashion, film" /> </Field>
              <Field label="Deliverables" icon={<PackageCheck className="h-3.5 w-3.5" />}> <Input value={brief.deliverables} onChange={(v) => handleBriefChange("deliverables", v)} placeholder="Photos, reels, edits" /> </Field>
              <Field label="Usage Rights" icon={<ShieldCheck className="h-3.5 w-3.5" />}> <Input value={brief.usage} onChange={(v) => handleBriefChange("usage", v)} placeholder="Platforms, duration, region" /> </Field>
              <Field label="References/Moodboard Links" icon={<LinkIcon className="h-3.5 w-3.5" />}> <Input value={brief.references} onChange={(v) => handleBriefChange("references", v)} placeholder="Paste reference links" /> </Field>
              <Field label="Wardrobe, Hair & Makeup" icon={<Shirt className="h-3.5 w-3.5" />}> <Input value={brief.wardrobe} onChange={(v) => handleBriefChange("wardrobe", v)} placeholder="Provided or bring your own" /> </Field>
              <Field label="Deadline" icon={<CalendarDays className="h-3.5 w-3.5" />}> <Input value={brief.deadline} onChange={(v) => handleBriefChange("deadline", v)} placeholder="YYYY-MM-DD or ASAP" /> </Field>
            </div>
          </section>

          <section className="rounded-2xl  p-6  ">
            <h2 className="text-lg font-semibold text-gray-900">Eligibility Criteria</h2>
            <div className="mt-6 grid grid-cols-1 gap-4">
              <Field label="Gender" icon={<User className="h-3.5 w-3.5" />}> <Input value={eligibility.gender} onChange={(v) => handleEligibilityChange("gender", v)} placeholder="Any / Male / Female / Non-binary" /> </Field>
              <Field label="Age" icon={<Hourglass className="h-3.5 w-3.5" />}> <Input value={eligibility.age} onChange={(v) => handleEligibilityChange("age", v)} placeholder="e.g., 18-28" /> </Field>
              <Field label="Height" icon={<Ruler className="h-3.5 w-3.5" />}> <Input value={eligibility.height} onChange={(v) => handleEligibilityChange("height", v)} placeholder="e.g., 5'6" /> </Field>
              <Field label="Skin Tone / Fit Inclusive" icon={<Sparkles className="h-3.5 w-3.5" />}> <Input value={eligibility.skinTone} onChange={(v) => handleEligibilityChange("skinTone", v)} placeholder="All inclusive / specific" /> </Field>
              <Field label="Prior Experience" icon={<Star className="h-3.5 w-3.5" />}> <Input value={eligibility.experience} onChange={(v) => handleEligibilityChange("experience", v)} placeholder="Beginner / Intermediate / Pro" /> </Field>
              <Field label="Location" icon={<MapPin className="h-3.5 w-3.5" />}> <Input value={eligibility.location} onChange={(v) => handleEligibilityChange("location", v)} placeholder="City or region" /> </Field>
            </div>
          </section>

          <section className="rounded-2xl  p-6  ">
            <h2 className="text-lg font-semibold text-gray-900">Upload Model Portfolio</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Field label="Weight (kg)" icon={<Scale className="h-3.5 w-3.5" />}>
                <Input value={portfolio.weight} onChange={(v) => handlePortfolioChange("weight", v)} placeholder="e.g., 54" />
              </Field>
              <Field label="Bust/Chest" icon={<Shirt className="h-3.5 w-3.5" />}>
                <Input value={portfolio.bustChest} onChange={(v) => handlePortfolioChange("bustChest", v)} placeholder="e.g., 34" />
              </Field>
              <Field label="Waist" icon={<Ruler className="h-3.5 w-3.5" />}>
                <Input value={portfolio.waist} onChange={(v) => handlePortfolioChange("waist", v)} placeholder="e.g., 26" />
              </Field>
              <Field label="Hips" icon={<Ruler className="h-3.5 w-3.5" />}>
                <Input value={portfolio.hips} onChange={(v) => handlePortfolioChange("hips", v)} placeholder="e.g., 36" />
              </Field>
              <Field label="Bottom Size" icon={<Ruler className="h-3.5 w-3.5" />}>
                <Input value={portfolio.bottomSize} onChange={(v) => handlePortfolioChange("bottomSize", v)} placeholder="e.g., M" />
              </Field>
              <Field label="Eye Color" icon={<Eye className="h-3.5 w-3.5" />}>
                <Input value={portfolio.eyeColor} onChange={(v) => handlePortfolioChange("eyeColor", v)} placeholder="e.g., Brown" />
              </Field>
              <Field label="Hair Color" icon={<Scissors className="h-3.5 w-3.5" />}>
                <Input value={portfolio.hairColor} onChange={(v) => handlePortfolioChange("hairColor", v)} placeholder="e.g., Black" />
              </Field>
              <Field label="Shoe Size" icon={<Ruler className="h-3.5 w-3.5" />}>
                <Input value={portfolio.shoeSize} onChange={(v) => handlePortfolioChange("shoeSize", v)} placeholder="e.g., 8" />
              </Field>
              <Field label="Dress Size" icon={<Shirt className="h-3.5 w-3.5" />}>
                <Input value={portfolio.dress} onChange={(v) => handlePortfolioChange("dress", v)} placeholder="e.g., S" />
              </Field>
              <Field label="Shirt Size" icon={<Shirt className="h-3.5 w-3.5" />}>
                <Input value={portfolio.shirt} onChange={(v) => handlePortfolioChange("shirt", v)} placeholder="e.g., 38" />
              </Field>
            </div>
          </section>

          <section className="rounded-2xl  p-6  ">
            <h2 className="text-lg font-semibold text-gray-900">Upload Photos</h2>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <Dropzone icon={<Images className="h-6 w-6" />} text="Upload Photos" hint="PNG, JPG up to 10MB each" multiple accept="image/*" onChange={onPhotoFiles} />
              <Dropzone icon={<UploadCloud className="h-6 w-6" />} text="Upload Comp Card" hint="PDF or image" multiple={false} accept="image/*,application/pdf" onChange={onPhotoFiles} />
            </div>
            {photos.length > 0 && (
              <ul className="mt-4 text-sm text-gray-600">
                {photos.map((f) => (
                  <li key={f.name}>{f.name}</li>
                ))}
              </ul>
            )}
          </section>

          <section className="rounded-2xl p-6  ">
            <h2 className="text-lg font-semibold text-gray-900">Upload Videos walk or intro</h2>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <Dropzone icon={<Video className="h-6 w-6" />} text="Upload Videos" hint="MP4, MOV up to 100MB" multiple accept="video/*" onChange={onVideoFiles} />
            </div>
            {videos.length > 0 && (
              <ul className="mt-4 text-sm text-gray-600">
                {videos.map((f) => (
                  <li key={f.name}>{f.name}</li>
                ))}
              </ul>
            )}
          </section>

          <div className="flex justify-center pb-8">
            <GradientButton label="Post" width="w-56" variant="horizontal" disabled={!canSubmit} />
          </div>
        </form>
      </div>
    </main>
  );
}
