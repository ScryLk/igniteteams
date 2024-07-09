import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { Container } from "./styles";
import { useState } from "react";

export function Groups() {
  const [groups, setGroups] = useState<String[]>([]);
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com sua turma" />
      <FlatList
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button
        type="PRIMARY"
        title="Criar nova Turma"
        />
    </Container>
  );
}
