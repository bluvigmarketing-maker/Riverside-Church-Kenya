import { requirePermission } from "@/lib/admin/require-session";
import { getPrograms } from "@/lib/content";
import { ProgramRow } from "@/components/admin/programs/program-row";
import { NewProgramCard } from "@/components/admin/programs/new-program-card";
import { createProgram, updateProgram, deleteProgram } from "./actions";

export default async function AdminProgramsPage() {
  await requirePermission("programs");
  const programs = await getPrograms();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-navy-950">Programs</h1>
        <p className="mt-1 text-navy-700">Manage the ministries / pillars of faith grid.</p>
      </div>

      <NewProgramCard action={createProgram} />

      <div className="flex flex-col gap-4">
        {programs.length === 0 && <p className="text-navy-600">No programs yet.</p>}
        {programs.map((program) => (
          <ProgramRow
            key={program.id}
            program={program}
            updateAction={updateProgram.bind(null, program.id)}
            deleteAction={deleteProgram.bind(null, program.id)}
          />
        ))}
      </div>
    </div>
  );
}
