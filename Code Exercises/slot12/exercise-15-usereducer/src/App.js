import React from "react";
import Counter from "./components/Counter"; // Bài 1
import ChangeNameAge from "./components/ChangeNameAge"; // Bài 2
import ItemList from "./components/ItemList"; // Bài 3
import ItemListAdvanced from "./components/ItemListAdvanced"; // Bài 4
import QuestionBank from "./components/QuestionBank"; // Bài 5 + 6

import { Container, Card } from "react-bootstrap";

function App() {
  return (
    <Container className="my-4">
      {/* Bài 1 */}
      <Card className="mb-4 p-3">
        <h2>Bài 1 – Counter (useReducer)</h2>
        <Counter />
      </Card>

      {/* Bài 2 */}
      <Card className="mb-4 p-3">
        <h2>Bài 2 – Change Name & Age</h2>
        <ChangeNameAge />
      </Card>

      {/* Bài 3 */}
      <Card className="mb-4 p-3">
        <h2>Bài 3 – Item List (Add & Remove)</h2>
        <ItemList />
      </Card>

      {/* Bài 4 */}
      <Card className="mb-4 p-3">
        <h2>Bài 4 – Item List Advanced (Edit, Sort, Filter)</h2>
        <ItemListAdvanced />
      </Card>

      {/* Bài 5 + 6 */}
      <Card className="mb-4 p-3">
        <h2>Bài 5 + 6 – QuestionBank (Quiz)</h2>
        <QuestionBank />
      </Card>
    </Container>
  );
}

export default App;
