import { useState, useEffect } from 'react';

const dropdownRegistry = new Set();

export function useDropdown(id) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedDropdown = event.target.closest('[data-dropdown]');
      
      if (!clickedDropdown) {
        setIsOpen(false);
        return;
      }

      const clickedDropdownId = clickedDropdown.getAttribute('data-dropdown');
      if (clickedDropdownId !== id) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    dropdownRegistry.add(id);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      dropdownRegistry.delete(id);
    };
  }, [id]);

  return [isOpen, setIsOpen];
}