export default function RenderLeaf({ attributes, children, leaf }) {
  if (leaf.bold) {
    children = <strong>{children}</strong>
    
  }
}