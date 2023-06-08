import ProtectedRoute from "@/components/ProtectedRoute";

export default function Address() {
  return (
    <ProtectedRoute>
      <h1>Address route</h1>
    </ProtectedRoute>
  );
}
