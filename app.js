// Menu Data
const menuData = {
    combos: [
        // Tech Combos
        {
            name: "Bug Fix Lunch",
            price: "200",
            type: "combo",
            details: "Irani Chicken Dum Biryani + Soft Drink",
            save: "Perfect for busy developers",
            segment: "tech"
        },
        {
            name: "Deploy & Dine",
            price: "399",
            type: "combo",
            details: "Chicken 65 Biryani + Chicken 65 + Soft Drink",
            save: "Save ₹61",
            segment: "tech"
        },
        {
            name: "Hackathon Pack",
            price: "1,299",
            type: "combo",
            details: "Serves 5: Mixed Biryanis + Starters + Soft Drink",
            save: "Save ₹201",
            segment: "tech"
        },
        // Movie Combos
        {
            name: "Interval Feast",
            price: "359",
            type: "combo",
            details: "Chicken Fry Piece Biryani + Chicken 65 + Soft Drink",
            save: "Save ₹81",
            segment: "movie"
        },
        {
            name: "Post-Movie Munchies",
            price: "279",
            type: "combo",
            details: "Double Egg Chicken Fried Rice + Crispy Baby Corn",
            save: "Save ₹141",
            segment: "movie"
        },
        // Party Combos
        {
            name: "Sober Up Special",
            price: "449",
            type: "combo",
            details: "Ghee Roast Chicken + Butter Chicken + 4 Butter Phulkas",
            save: "Save ₹151",
            segment: "party"
        },
        {
            name: "Drunk Munchies Deluxe",
            price: "399",
            type: "combo",
            details: "Chicken Mughlai Biryani + Pepper Chicken + Soft Drink",
            save: "Save ₹81",
            segment: "party"
        },
        // Family Combos
        {
            name: "Weekend Family Feast",
            price: "899",
            type: "combo",
            details: "Chicken + Veg Biryanis + Starters + Phulkas",
            save: "Save ₹121 | Feeds 4-5",
            segment: "family"
        },
        {
            name: "Party Bundle Supreme",
            price: "1,499",
            type: "combo",
            details: "Jumbo Biryanis + Lollipops + Starters",
            save: "Save ₹191 | Feeds 6-8",
            segment: "family"
        },
    ],
    
    biryani: [
        // Non-Veg Biryani
        { name: "Irani Chicken Dum Biryani", price: "180/280/480", type: "non-veg" },
        { name: "Chicken Fry Piece Biryani", price: "220/320/520", type: "non-veg" },
        { name: "Factory Spl Chicken Biryani", price: "240/340/560", type: "non-veg" },
        { name: "Chicken 65 Biryani", price: "240/340/560", type: "non-veg" },
        { name: "Gongura Chicken Biryani", price: "240/340/560", type: "non-veg" },
        { name: "Chicken Mughlai Biryani", price: "260/360/580", type: "non-veg" },
        { name: "Chicken Lollipop Biryani", price: "220/320/520", type: "non-veg" },
        { name: "Prawns Fry Biryani", price: "320/450/800", type: "non-veg" },
        // Veg Biryani
        { name: "Mixed Veg Biryani", price: "180/260/450", type: "veg" },
        { name: "Paneer Biryani", price: "220/320/520", type: "veg" },
        { name: "Gutti Vankaya Biryani", price: "180/260/450", type: "veg" },
        { name: "Mushroom Biryani", price: "220/320/520", type: "veg" },
        { name: "Kaju Biryani", price: "260/360/560", type: "veg" },
    ],
    
    starters: [
        // Non-Veg Starters
        { name: "Chicken 65", price: "200", type: "non-veg" },
        { name: "Chilli Chicken", price: "200", type: "non-veg" },
        { name: "Chicken Manchuria", price: "200", type: "non-veg" },
        { name: "Chicken Lollipop (3/6pc)", price: "150/240", type: "non-veg" },
        { name: "Chicken Majestic", price: "240", type: "non-veg" },
        { name: "Boneless Kaju Chicken", price: "260", type: "non-veg" },
        { name: "Pepper Chicken", price: "200", type: "non-veg" },
        { name: "Ghee Roast Chicken", price: "260", type: "non-veg" },
        // Veg Starters
        { name: "Gobi Manchuria", price: "160", type: "veg" },
        { name: "Gobi Chilli", price: "160", type: "veg" },
        { name: "Paneer 65", price: "200", type: "veg" },
        { name: "Paneer Chilli", price: "200", type: "veg" },
        { name: "Paneer Manchuria", price: "200", type: "veg" },
        { name: "Mushroom Chilli", price: "200", type: "veg" },
        { name: "Mushroom Manchuria", price: "200", type: "veg" },
        { name: "Crispy Fried Baby Corn", price: "200", type: "veg" }
    ],
    
    others: [
        // Signature Rice
        { name: "Avakaya Muddapappu Annam", price: "160", type: "veg" },
        { name: "Ghee Sambar Rice", price: "160", type: "veg" },
        { name: "Avakaya pappu Annam+ Chicken Fry", price: "280", type: "non-veg" },
        { name: "Ghee Sambar Rice+ Chicken Fry", price: "280", type: "non-veg" },
        { name: "Chicken 65 Sambar Rice", price: "280", type: "non-veg" },
        // Fried Rice
        { name: "Double Egg Fried Rice", price: "160", type: "non-veg" },
        { name: "Double Egg Chicken Fried Rice", price: "220", type: "non-veg" },
        { name: "Veg Fried Rice", price: "120", type: "veg" },
        // Curries
        { name: "Butter Chicken", price: "220", type: "non-veg" },
        { name: "Kadai Chicken", price: "220", type: "non-veg" },
        { name: "Chicken Masala", price: "220", type: "non-veg" },
        { name: "Chicken Mughlai", price: "260", type: "non-veg" },
        { name: "Paneer Butter Masala", price: "220", type: "veg" },
        { name: "Kadai Paneer", price: "220", type: "veg" },
        { name: "Mushroom Masala", price: "220", type: "veg" },
        { name: "Kadai Mushroom", price: "220", type: "veg" },
        // Breads
        { name: "Phulka", price: "20", type: "veg" },
        { name: "Butter Phulka", price: "30", type: "veg" },
        { name: "Soft Drink", price: "20", type: "veg" },
        // Beverages
        { name: "Water", price: "20", type: "veg" },
        { name: "Soft Drink", price: "20", type: "veg" }
    ]
};

// Render Menu Items
function renderMenu() {
    // Render Combos
    const combosGrid = document.getElementById('combos-grid');
    menuData.combos.forEach(combo => {
        const comboDiv = document.createElement('div');
        comboDiv.className = 'menu-item combo-item';
        comboDiv.innerHTML = `
            <div class="item-name">${combo.name}</div>
            <div class="item-price">₹${combo.price}</div>
            <div class="combo-details">${combo.details}</div>
            <span class="save-tag">${combo.save}</span>
        `;
        combosGrid.appendChild(comboDiv);
    });

    // Render Biryani
    const biryaniGrid = document.getElementById('biryani-grid');
    menuData.biryani.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        itemDiv.innerHTML = `
            <div class="item-name">${item.name}</div>
            <div class="item-price">₹${item.price}</div>
            <div class="combo-details">Single/Family/Jumbo</div>
        `;
        biryaniGrid.appendChild(itemDiv);
    });

    // Render Starters
    const startersGrid = document.getElementById('starters-grid');
    menuData.starters.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        itemDiv.innerHTML = `
            <div class="item-name">${item.name}</div>
            <div class="item-price">₹${item.price}</div>
        `;
        startersGrid.appendChild(itemDiv);
    });

    // Render Others
    const othersGrid = document.getElementById('others-grid');
    menuData.others.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        itemDiv.innerHTML = `
            <div class="item-name">${item.name}</div>
            <div class="item-price">₹${item.price}</div>
        `;
        othersGrid.appendChild(itemDiv);
    });
}

// PDF Download Function
function downloadPDF() {
    console.log('Starting PDF generation...');
    
    // Get the header and content
    const header = document.querySelector('.header-bar');
    const container = document.getElementById('content');
    
    if (!container) {
        console.error('Content container not found!');
        return;
    }
    
    // Create a wrapper div for the entire document
    const pdfWrapper = document.createElement('div');
    pdfWrapper.style.width = '210mm';
    pdfWrapper.style.backgroundColor = 'white';
    pdfWrapper.style.fontFamily = 'Arial, sans-serif';
    
    // Clone and add header
    if (header) {
        const headerClone = header.cloneNode(true);
        headerClone.style.pageBreakAfter = 'avoid';
        pdfWrapper.appendChild(headerClone);
    }
    
    // Clone the content
    const contentClone = container.cloneNode(true);
    
    // Style the container for PDF
    contentClone.style.display = 'block';
    contentClone.style.width = '100%';
    
    // Get all pages and style them
    const pages = contentClone.querySelectorAll('.page');
    pages.forEach((page, index) => {
        page.style.maxHeight = 'none';
        page.style.overflow = 'visible';
        page.style.height = 'auto';
        page.style.width = '100%';
        page.style.padding = '20px';
        page.style.margin = '0';
        page.style.boxSizing = 'border-box';
        page.style.backgroundColor = 'white';
        
        // Force page break between pages
        if (index === 0) {
            page.style.pageBreakAfter = 'always';
        }
        
        // Adjust font sizes for better PDF rendering
        const titles = page.querySelectorAll('h2, h3');
        titles.forEach(title => {
            title.style.fontSize = title.tagName === 'H2' ? '20px' : '16px';
            title.style.marginBottom = '10px';
        });
        
        const items = page.querySelectorAll('.menu-item');
        items.forEach(item => {
            item.style.padding = '10px';
            item.style.fontSize = '11px';
            item.style.marginBottom = '8px';
        });
        
        const grids = page.querySelectorAll('.menu-grid');
        grids.forEach(grid => {
            grid.style.gap = '10px';
        });
        
        const sections = page.querySelectorAll('.menu-section');
        sections.forEach(section => {
            section.style.marginBottom = '20px';
        });
    });
    
    // Add content to wrapper
    pdfWrapper.appendChild(contentClone);
    
    // Create temporary container
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '0';
    tempContainer.appendChild(pdfWrapper);
    document.body.appendChild(tempContainer);
    
    const opt = {
        margin: 10,
        filename: 'BiryaniFactory_Menu.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            logging: true,
            windowWidth: 794 // A4 width in pixels at 96 DPI
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait'
        },
        pagebreak: { 
            mode: ['avoid-all', 'css', 'legacy']
        }
    };
    
    // Generate PDF
    html2pdf().set(opt).from(pdfWrapper).save().then(() => {
        console.log('PDF generated successfully!');
        document.body.removeChild(tempContainer);
    }).catch(error => {
        console.error('PDF generation failed:', error);
        document.body.removeChild(tempContainer);
    });
}

// Make downloadPDF globally accessible
window.downloadPDF = downloadPDF;

// Make menuData globally accessible for PDF generation
window.menuData = menuData;

// Register PWA Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('PWA registered'))
            .catch(error => console.log('PWA registration failed:', error));
    });
}

// Web Vitals Monitoring
if ('web-vitals' in window) {
    const {onCLS, onFID, onLCP, onTTFB, onFCP} = window['web-vitals'];
    function sendToAnalytics({name, delta, id}) {
        console.log(`${name}: ${delta}`);
        // Send to your analytics endpoint
    }
    onCLS(sendToAnalytics);
    onFID(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
    onFCP(sendToAnalytics);
}

// Performance tracking
const track = (event, data) => {
    if (window.gtag) gtag('event', event, data);
    performance.mark(`bf:${event}`);
}

// Initialize
document.addEventListener('DOMContentLoaded', renderMenu);
