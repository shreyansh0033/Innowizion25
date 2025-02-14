export interface TeamMember {
  id: string;
  name: string;
  image: string;
  designation: string;
  role?: string;
  branch?: string;
  year?: string;
}

export interface TeamSectionProps {
  facultyAdvisors: TeamMember[];
  studentMembers: TeamMember[];
}
