// ✅ Bài 4 - useReducer cho Item List nâng cao: thêm, xoá, sửa, tìm, sắp xếp

import React, { useReducer, useState } from "react";
import {
  Container,
  Form,
  Button,
  ListGroup,
  Row,
  Col,
  InputGroup
} from "react-bootstrap";

// Reducer xử lý: thêm, xoá, sửa, sort, filter
function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case "START_EDIT":
      return { ...state, editingItem: action.item };
    case "SAVE_EDIT":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.item.id ? { ...i, name: action.item.name } : i
        ),
        editingItem: null
      };
    case "SET_SORT":
      return { ...state, sortType: action.sortType };
    case "SET_FILTER":
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}

const initialState = {
  items: [],
  editingItem: null,
  sortType: "created",
  filter: ""
};

function ItemListAdvanced() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");

  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = {
        id: Date.now(),
        name: newItemName,
        createdAt: new Date()
      };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleEditChange = (e) => {
    dispatch({
      type: "START_EDIT",
      item: { ...state.editingItem, name: e.target.value }
    });
  };

  const handleSaveEdit = () => {
    if (state.editingItem?.name.trim()) {
      dispatch({ type: "SAVE_EDIT", item: state.editingItem });
    }
  };

  const getSortedAndFilteredItems = () => {
    let items = [...state.items];

    // Lọc theo tên
    if (state.filter) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(state.filter.toLowerCase())
      );
    }

    // Sắp xếp theo tên hoặc thời gian
    if (state.sortType === "name") {
      items.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      items.sort((a, b) => a.createdAt - b.createdAt);
    }

    return items;
  };

  return (
    <Container className="mt-4">
      <h3>Exercise 4: Item List Advanced</h3>

      {/* Form thêm item */}
      <Form className="mb-3">
        <Form.Label>New Item</Form.Label>
        <InputGroup>
          <Form.Control
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Enter item name"
          />
          <Button onClick={handleAddItem}>Add</Button>
        </InputGroup>
      </Form>

      {/* Filter và Sort */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Control
            placeholder="Filter"
            value={state.filter}
            onChange={(e) =>
              dispatch({ type: "SET_FILTER", filter: e.target.value })
            }
          />
        </Col>
        <Col md={6}>
          <Form.Select
            value={state.sortType}
            onChange={(e) =>
              dispatch({ type: "SET_SORT", sortType: e.target.value })
            }
          >
            <option value="created">Sort by Created</option>
            <option value="name">Sort by Name</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Danh sách item */}
      <ListGroup>
        {getSortedAndFilteredItems().map((item) => (
          <ListGroup.Item
            key={item.id}
            className="d-flex justify-content-between"
          >
            {state.editingItem?.id === item.id ? (
              <>
                <Form.Control
                  value={state.editingItem.name}
                  onChange={handleEditChange}
                />
                <Button size="sm" onClick={handleSaveEdit}>
                  Save
                </Button>
              </>
            ) : (
              <>
                {item.name}
                <div>
                  <Button
                    size="sm"
                    className="me-2"
                    onClick={() => dispatch({ type: "START_EDIT", item })}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() =>
                      dispatch({ type: "REMOVE_ITEM", id: item.id })
                    }
                  >
                    Remove
                  </Button>
                </div>
              </>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default ItemListAdvanced;
