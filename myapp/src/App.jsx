import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./screen/Login";
import Settings from "./screen/Settings";
import Register from "./screen/Register";
import User from "./screen/User";
import DirectiveList from "./screen/Directive";
import DirectiveDetail from "./screen/Directive/DirectiveDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/app" element={<MainLayout />}>
        <Route index element={<DirectiveList />} />
        <Route path="directive/:id" element={<DirectiveDetail />} />
        <Route path="settings" element={<Settings />} />
        <Route path="user/:id" element={<User />} />
      </Route>
    </Routes>
  );
}
