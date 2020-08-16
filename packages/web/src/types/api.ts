export interface New {
  id: number;
  title: string;
  description: string;
  slug: string;
  created_by: {
    id: number;
    firstname: string;
    lastname: string;
  };
  updated_by: {
    id: number;
    firstname: string;
    lastname: string;
  };
  created_at: string;
  updated_at: string;
}
