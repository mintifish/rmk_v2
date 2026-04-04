"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { kontaktData } from "@/lib/kontakt-data";
import { Phone, Mail } from "lucide-react";

export function KontaktDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg" variant="secondary" className="shadow-sm hover:bg-white hover:text-[#572111] hover:border hover:border-[#572111]">
                    <Phone className="mr-2 h-5 w-5" /> Kontakt
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-center text-3xl">Kontaktni podatki</DialogTitle>
                    <DialogDescription className="text-center">Kako nas lahko kontaktirate.</DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                    <div className="rounded-xl border bg-white shadow-sm p-6">
                        <h3 className="font-heading text-center text-2xl font-black text-slate-900">{kontaktData.vodstvo.naslov}</h3>
                        <div className="mx-auto mt-4 max-w-md space-y-2 text-center text-lg text-slate-700">
                            <p><span className="font-semibold text-slate-900">Nacelnik:</span> {kontaktData.vodstvo.nacelnik.ime}</p>
                            <p><span className="font-semibold text-slate-900">Email:</span> {kontaktData.vodstvo.nacelnik.email}</p>
                            <p><span className="font-semibold text-slate-900">Telefon:</span> {kontaktData.vodstvo.nacelnik.telefon}</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-white shadow-sm p-6">
                        <h3 className="font-heading text-center text-2xl font-black text-slate-900">{kontaktData.ostaliPodatki.naslov}</h3>
                        <div className="mx-auto mt-4 max-w-md space-y-2 text-center text-lg text-slate-700">
                            <p><span className="font-semibold text-slate-900">Lokacija:</span> {kontaktData.ostaliPodatki.lokacija}</p>
                            <p><span className="font-semibold text-slate-900">Davčna številka:</span> {kontaktData.ostaliPodatki.davcnaStevilka}</p>
                            <p><span className="font-semibold text-slate-900">TRR:</span> {kontaktData.ostaliPodatki.trr}</p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}