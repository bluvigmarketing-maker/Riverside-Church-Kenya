"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

type Row = Record<string, string>;

export function RepeaterField({
  name,
  label,
  fields,
  defaultValue,
  addLabel = "Add row",
}: {
  name: string;
  label: string;
  fields: { key: string; placeholder: string }[];
  defaultValue: Row[];
  addLabel?: string;
}) {
  const [rows, setRows] = useState<Row[]>(defaultValue);

  function updateRow(index: number, key: string, value: string) {
    setRows((prev) => prev.map((row, i) => (i === index ? { ...row, [key]: value } : row)));
  }

  function addRow() {
    setRows((prev) => [...prev, Object.fromEntries(fields.map((f) => [f.key, ""]))]);
  }

  function removeRow(index: number) {
    setRows((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-navy-900">{label}</label>
      {rows.map((row, index) => (
        <div key={index} className="flex items-center gap-2">
          {fields.map((field) => (
            <input
              key={field.key}
              value={row[field.key] ?? ""}
              onChange={(e) => updateRow(index, field.key, e.target.value)}
              placeholder={field.placeholder}
              className="flex-1 rounded-lg border border-navy-200 px-3 py-2 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
            />
          ))}
          <button
            type="button"
            onClick={() => removeRow(index)}
            className="rounded-lg p-2 text-destructive hover:bg-destructive/10"
            aria-label="Remove row"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addRow}
        className="flex w-fit items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-navy-950"
      >
        <Plus className="size-3.5" aria-hidden="true" />
        {addLabel}
      </button>
      <input type="hidden" name={name} value={JSON.stringify(rows)} />
    </div>
  );
}
