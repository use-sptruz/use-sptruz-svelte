export interface SvelteComponentProps<ComponentProps> {
  Component: new (...args: any[]) => { $set: (props: ComponentProps) => void };
  props: ComponentProps;
}
