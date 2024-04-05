import React from 'react'
import { useCallback } from 'react';
import Swal from 'sweetalert2'

function useClipboard() {
    const copyToClipboard = useCallback(async (text) => {
        try {
            await navigator.clipboard.writeText(text)
            Swal.fire({
                // title: "Muito bem!",
                text: "Texto copiado para área de transferência!",
                icon: "success",
                timer: 1400,
                showConfirmButton: false,

              })
        } catch (err) {
            Swal.fire({
                // title: "Muito bem!",
                text: "Erro ao copiar texto para área de transferência!",
                icon: "error",
                timer: 1400,
                showConfirmButton: false,
              })
        }
    }, []);
    return copyToClipboard;
}
export default useClipboard