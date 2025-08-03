import { ListGroup, ListGroupItem } from "flowbite-react";

export function LinkList() {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroupItem href="#" active>
          Profile
        </ListGroupItem>
        <ListGroupItem href="https://agora.xtec.cat/ceip-gerbert-d-orlhac/">
          Web de l'escola
        </ListGroupItem>
        <ListGroupItem href="https://paidos.fundesplai.org/escoles/escola-gerbert-dorlhac/">
          Paidos
        </ListGroupItem>
        <ListGroupItem href="#">Download</ListGroupItem>
      </ListGroup>
    </div>
  );
}
