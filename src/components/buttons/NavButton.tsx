import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type NavProps = {
  Icon: LucideIcon;
  label: string;
  href?: string;

};
const NavButton = ({ Icon, label, href }: NavProps) => {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      className="rounded-full"
    >
      {href ? (
        <Link href={href}>
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  );
}
export default NavButton
