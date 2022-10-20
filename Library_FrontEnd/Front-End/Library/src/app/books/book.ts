import { Editorial} from "../editorial/editorial";

export interface Book {
  id: number;
  name: string;
  description: string;
  image_url: string;
  editorial_id: number;
  edit_date: string;
  amount: number;
}
