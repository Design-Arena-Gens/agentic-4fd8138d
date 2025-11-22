"use client";

export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button className="print-button" onClick={handlePrint}>
      Imprimer ce profil
    </button>
  );
}
