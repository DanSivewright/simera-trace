import { PageSection } from "@/components/page-section";

type Props = {};
const Page: React.FC<Props> = () => {
  return (
    <PageSection variant="band" pattern="hex">
      <div className="page-surface mx-auto max-w-2xl rounded-20 px-6 py-16 text-center">
        Case Studies
      </div>
    </PageSection>
  );
};
export default Page;
