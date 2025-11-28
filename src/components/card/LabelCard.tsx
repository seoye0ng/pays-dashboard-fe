import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SectionCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function LabelCard({ title, description, className }: SectionCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardTitle className='text-xl font-semibold'>{title}</CardTitle>
      </CardHeader>
    </Card>
  );
}
