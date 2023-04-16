
fetch('medicines.json')
    .then(response => response.json())
    .then(data => {
        const drugsContainer = document.querySelector('.drugs');
        const selectDrug = document.querySelector('#select');

        
        // data.forEach(drug => {
        //     const option = document.createElement('option');
        //     option.value = drug.id;
        //     option.textContent = drug.brandName || drug.genericName;
        //     selectDrug.appendChild(option);
        // });

        const searchInput = document.getElementById("searchInput")


        searchInput.addEventListener('change', (e) => {
            const searchDrug = data.filter(drug =>{

                if(drug.brandName.includes(e.target.value)) {
                   return drug
        
                } 
        });

        searchDrug.forEach(drug => {
            const option = document.createElement('option');
            option.value = drug.id;
            option.textContent = drug.brandName || drug.genericName;
            selectDrug.appendChild(option);
                
            })

            // if (selectedDrug) {
            //     console.log(`Selected drug: ${selectedDrug.brandName || selectedDrug.genericName}`)
            // }
            console.log(searchDrug,  "is element")
        });

         const clearButton = document.querySelector('.btn');
         clearButton.addEventListener('click', () => {
             selectDrug.selectedIndex = 0;
         });
    })
    .catch(error => console.error(error));


