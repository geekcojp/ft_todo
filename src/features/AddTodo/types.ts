export type AddItem = {
  task: string;
  priority: string;
  deadline: string;
};

export type Props = {
  addItem: (item: AddItem) => void;
};
