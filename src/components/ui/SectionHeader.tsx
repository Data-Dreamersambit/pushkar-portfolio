export function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl mb-10">
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
