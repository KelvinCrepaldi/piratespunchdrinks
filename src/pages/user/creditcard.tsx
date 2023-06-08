import ProtectedRoute from "@/components/ProtectedRoute";

export default function CreditCard() {
  return (
    <ProtectedRoute>
      <h1>Credit card page</h1>
    </ProtectedRoute>
  );
}
