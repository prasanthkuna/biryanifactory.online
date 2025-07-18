// Complete 2-page PDF solution with ALL items
function generateComplete2PagePDF() {
    // Get all menu data from the page
    const menuData = window.menuData || {};
    
    // Create print window
    const printWindow = window.open('', '_blank');
    
    // Build complete menu content
    let allCombos = '';
    if (menuData.combos) {
        // Filter out any non-combo items that might have been added
        const actualCombos = menuData.combos.filter(combo => 
            combo.segment && ['tech', 'movie', 'party', 'family'].includes(combo.segment)
        );
        actualCombos.forEach(combo => {
            allCombos += `
                <div class="item combo-item">
                    <div class="item-header">
                        <span class="item-name">${combo.name}</span>
                        <span class="item-price">₹${combo.price}</span>
                    </div>
                    <div class="item-details">${combo.details}</div>
                    <span class="save-tag">${combo.save}</span>
                </div>
            `;
        });
    }
    
    let allBiryani = '';
    if (menuData.biryani) {
        menuData.biryani.forEach(item => {
            allBiryani += `
                <div class="item">
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">₹${item.price}</span>
                </div>
            `;
        });
    }
    
    let allStarters = '';
    if (menuData.starters) {
        menuData.starters.forEach(item => {
            allStarters += `
                <div class="item">
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">₹${item.price}</span>
                </div>
            `;
        });
    }
    
    let allOthers = '';
    if (menuData.others) {
        menuData.others.forEach(item => {
            allOthers += `
                <div class="item">
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">₹${item.price}</span>
                </div>
            `;
        });
    }
    
    const printDocument = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Biryani Factory Menu</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
    <style>
        @page {
            size: A4;
            margin: 10mm;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        
        body {
            font-family: 'Montserrat', sans-serif;
            font-size: 9pt;
            line-height: 1.3;
            color: #333;
        }
        
        /* Header styling */
        .header {
            background: #00695C;
            color: white;
            padding: 10px;
            text-align: center;
            margin-bottom: 10px;
        }
        
        .header h1 {
            font-family: 'Orbitron', sans-serif;
            font-size: 20pt;
            color: #FF5722;
            margin: 5px 0;
        }
        
        .header .tagline {
            font-size: 9pt;
        }
        
        .logo-img {
            width: 80px;
            height: auto;
            margin: 0 auto 5px;
            display: block;
        }
        
        /* Page layout */
        .page {
            min-height: 257mm; /* A4 height minus margins */
            position: relative;
        }
        
        .page-info {
            position: absolute;
            top: 5px;
            right: 10px;
            font-size: 10pt;
            color: #FF5722;
            font-weight: bold;
            background: #FFC107;
            padding: 5px 12px;
            border-radius: 15px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .page-1 {
            page-break-after: always;
        }
        
        .page-2 {
            page-break-after: avoid;
        }
        
        .page-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 14pt;
            color: #FF5722;
            text-align: center;
            margin-bottom: 10px;
            padding-bottom: 3px;
            border-bottom: 2px solid #FF5722;
        }
        
        /* Section styling */
        .section {
            margin-bottom: 10px;
        }
        
        .section-title {
            font-size: 11pt;
            font-weight: bold;
            color: #00695C;
            margin-bottom: 5px;
            padding: 3px;
            background: linear-gradient(90deg, #FF5722 3px, transparent 3px);
            padding-left: 8px;
        }
        
        /* Grid layout - optimized for space */
        .items-grid-3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 5px;
        }
        
        .items-grid-2 {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 5px;
        }
        
        /* Item styling - compact */
        .item {
            background: #F5F5F5;
            padding: 5px;
            border-radius: 4px;
            border-left: 2px solid #FF5722;
            page-break-inside: avoid;
            font-size: 8pt;
        }
        
        .combo-item {
            background: #FFF8E1;
            border: 1px solid #FFC107;
            padding: 6px;
        }
        
        .item-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
        
        .item-name {
            font-weight: bold;
            color: #00695C;
            font-size: 8pt;
            flex: 1;
            margin-right: 5px;
        }
        
        .item-price {
            color: #FF5722;
            font-weight: bold;
            font-size: 8pt;
            white-space: nowrap;
        }
        
        .item-details {
            font-size: 7pt;
            color: #666;
            margin-top: 2px;
        }
        
        .save-tag {
            display: inline-block;
            background: #4CAF50;
            color: white;
            padding: 1px 4px;
            border-radius: 2px;
            font-size: 6pt;
            font-weight: bold;
            margin-top: 2px;
        }
        
        /* Page 2 specific */
        .benefits-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 4px;
            margin-bottom: 5px;
            font-size: 6pt;
        }
        
        .benefit-card {
            background: #F5F5F5;
            padding: 4px;
            border-radius: 3px;
            text-align: center;
            border: 1px solid #FFC107;
            font-size: 6pt;
        }
        
        .benefit-number {
            font-size: 8pt;
            font-weight: bold;
            color: #FF5722;
            font-family: 'Montserrat', sans-serif;
            line-height: 1.1;
        }
        
        .benefit-text {
            font-size: 5pt;
            color: #666;
            margin-top: 1px;
            line-height: 1.2;
        }
        
        .contact-box {
            background: #00695C;
            color: white;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
            margin-top: 10px;
        }
        
        .contact-box h3 {
            font-size: 12pt;
            margin-bottom: 5px;
        }
        
        .contact-box p {
            font-size: 9pt;
            margin: 3px 0;
        }
        
        /* Compact savings section */
        .savings-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 5px;
            margin-bottom: 10px;
        }
        
        .savings-item {
            background: #FFF8E1;
            padding: 5px;
            border-radius: 3px;
            font-size: 8pt;
        }
        
        .savings-amount {
            color: #4CAF50;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <div class="header">
        <img src="${window.location.origin}/logo.jpg" class="logo-img" alt="Logo" onerror="this.style.display='none'">
        <h1>BIRYANI FACTORY</h1>
        <p class="tagline">Crafted with Precision | Delivered with Passion</p>
        <p style="margin-top: 5px; color: #FFC107; font-weight: bold; font-size: 11pt;">RECEPTION - 9, KITCHEN - 8, WHATSAPP - 9573 264 441</p>
    </div>
    
    <!-- Page 1: Complete Menu -->
    <div class="page page-1">
        <h2 class="page-title">COMPLETE MENU & EXCLUSIVE COMBOS</h2>
        
        <!-- Combos Section -->
        <div class="section">
            <h3 class="section-title">🔥 EXCLUSIVE COMBOS (${menuData.combos ? menuData.combos.filter(c => c.segment && ['tech', 'movie', 'party', 'family'].includes(c.segment)).length : 0} items)</h3>
            <div class="items-grid-2">
                ${allCombos}
            </div>
        </div>
        
        <!-- Biryani Section -->
        <div class="section">
            <h3 class="section-title">🍛 BIRYANI SELECTION (${menuData.biryani ? menuData.biryani.length : 0} items)</h3>
            <div class="items-grid-3">
                ${allBiryani}
            </div>
        </div>
        
        <!-- Starters Section -->
        <div class="section">
            <h3 class="section-title">🍗 STARTERS & APPETIZERS (${menuData.starters ? menuData.starters.length : 0} items)</h3>
            <div class="items-grid-3">
                ${allStarters}
            </div>
        </div>
    </div>
    
    <!-- Page 2: Rice/Curries + Benefits -->
    <div class="page page-2">
        <!-- Continue menu items -->
        <div class="section">
            <h3 class="section-title">🍚 RICE, CURRIES & MORE (${menuData.others ? menuData.others.length : 0} items)</h3>
            <div class="items-grid-3">
                ${allOthers}
            </div>
        </div>
        
        <h2 class="page-title" style="margin-top: 10px;">NUTRITIONAL POWERHOUSE</h2>
        <p style="text-align: center; font-size: 8pt; color: #00695C; margin-bottom: 5px; font-weight: bold;">PER STANDARD SERVING (150g Chicken + 150g Basmati Rice)</p>
        
        <!-- Main Macros -->
        <div class="items-grid-2" style="margin-bottom: 10px;">
            <div class="item" style="background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%); border: 2px solid #FFC107; text-align: center;">
                <div style="font-size: 28pt; font-weight: 900; color: #FF5722; font-family: 'Orbitron', sans-serif;">485</div>
                <div style="font-size: 10pt; color: #00695C; font-weight: bold;">CALORIES</div>
                <div style="font-size: 7pt; color: #666;">Balanced energy for your day</div>
                <div style="font-size: 8pt; color: #00695C; margin-top: 3px;">24% of daily intake</div>
            </div>
            <div class="item" style="background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%); border: 2px solid #9c27b0; text-align: center;">
                <div style="font-size: 28pt; font-weight: 900; color: #E91E63; font-family: 'Orbitron', sans-serif;">35</div>
                <div style="font-size: 10pt; color: #00695C; font-weight: bold;">g PROTEIN</div>
                <div style="font-size: 7pt; color: #666;">Builds lean muscle mass</div>
                <div style="font-size: 8pt; color: #00695C; margin-top: 3px;">70% of daily needs</div>
            </div>
            <div class="item" style="background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); border: 2px solid #2196F3; text-align: center;">
                <div style="font-size: 28pt; font-weight: 900; color: #2196F3; font-family: 'Orbitron', sans-serif;">52</div>
                <div style="font-size: 10pt; color: #00695C; font-weight: bold;">g CARBS</div>
                <div style="font-size: 7pt; color: #666;">Sustained energy release</div>
                <div style="font-size: 8pt; color: #00695C; margin-top: 3px;">17% of daily intake</div>
            </div>
            <div class="item" style="background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%); border: 2px solid #9c27b0; text-align: center;">
                <div style="font-size: 28pt; font-weight: 900; color: #9c27b0; font-family: 'Orbitron', sans-serif;">12</div>
                <div style="font-size: 10pt; color: #00695C; font-weight: bold;">g FATS</div>
                <div style="font-size: 7pt; color: #666;">Healthy cooking oils</div>
                <div style="font-size: 8pt; color: #00695C; margin-top: 3px;">18% of daily intake</div>
            </div>
        </div>
        
        <!-- Key Nutrients Grid -->
        <div class="benefits-grid">
            <div class="benefit-card">
                <div class="benefit-number" style="font-size: 14pt;">15%</div>
                <div class="benefit-text">Daily Iron<br>Prevents anemia</div>
            </div>
            <div class="benefit-card">
                <div class="benefit-number" style="font-size: 14pt;">20%</div>
                <div class="benefit-text">Vitamin B12<br>Energy metabolism</div>
            </div>
            <div class="benefit-card">
                <div class="benefit-number" style="font-size: 14pt;">25%</div>
                <div class="benefit-text">Daily Zinc<br>Immunity boost</div>
            </div>
            <div class="benefit-card">
                <div class="benefit-number" style="font-size: 14pt;">3g</div>
                <div class="benefit-text">Dietary Fiber<br>Digestive health</div>
            </div>
            <div class="benefit-card">
                <div class="benefit-number" style="font-size: 14pt;">35mcg</div>
                <div class="benefit-text">Selenium<br>Antioxidant power</div>
            </div>
            <div class="benefit-card">
                <div class="benefit-number" style="font-size: 14pt;">2.5mg</div>
                <div class="benefit-text">Phosphorus<br>Bone health</div>
            </div>

            <div class="benefit-card">
                <div class="benefit-number">Metabolism Boost</div>
                <div class="benefit-text">Spices increase metabolic rate by 20%</div>
            </div>
            <div class="benefit-card">
                <div class="benefit-number">Anti-inflammatory</div>
                <div class="benefit-text">Turmeric & ginger reduce inflammation</div>
            </div>
            <div class="benefit-card">
                <div class="benefit-number">Digestive Health</div>
                <div class="benefit-text">Cumin & coriander aid digestion</div>
            </div>
            <div class="benefit-card">
                <div class="benefit-number">Heart Health</div>
                <div class="benefit-text">Garlic & onions reduce cholesterol</div>
            </div>
            <div class="benefit-card">
                <div class="benefit-number">Blood Sugar</div>
                <div class="benefit-text">Cinnamon helps regulate glucose</div>
            </div>
            <div class="benefit-card">
                <div class="benefit-number">Immunity</div>
                <div class="benefit-text">127 spices with antimicrobial properties</div>
            </div>


            <div class="benefit-card">
                <div class="benefit-number">Fresh Daily</div>
                <div class="benefit-text">No overnight storage</div>
            </div>
            <div class="benefit-card">
                <div class="benefit-number">FSSAI Certified</div>
                <div class="benefit-text">Government approved kitchen</div>
            </div>
            <div class="benefit-card">
                <div class="benefit-number">Halal Certified</div>
                <div class="benefit-text">Religious compliance</div>
            </div>
            <div class="benefit-card">
                <div class="benefit-number">Zero MSG</div>
                <div class="benefit-text">No artificial flavor enhancers</div>
            </div>
            <div class="benefit-card">
                <div class="benefit-number">No Preservatives</div>
                <div class="benefit-text">100% natural ingredients</div>
            </div>
            <div class="benefit-card">
                <div class="benefit-number">Hygiene 5★</div>
                <div class="benefit-text">Hospital-grade cleanliness</div>
            </div>

        </div>
        
        <!-- Why Order -->
        <div class="section">
            <h3 class="section-title">🚀 WHY BIRYANI FACTORY?</h3>
            <div class="items-grid-3">
                <div class="item">
                    <div class="item-name">30 min Delivery</div>
                    <div class="item-details">Hot & fresh</div>
                </div>
                <div class="item">
                    <div class="item-name">100% Fresh</div>
                    <div class="item-details">Made daily</div>
                </div>
                <div class="item">
                    <div class="item-name">5★ Hygiene</div>
                    <div class="item-details">FSSAI certified</div>
                </div>
                <div class="item">
                    <div class="item-name">Zero MSG</div>
                    <div class="item-details">All natural</div>
                </div>
                <div class="item">
                    <div class="item-name">Secret Recipe</div>
                    <div class="item-details">127 spices</div>
                </div>
                <div class="item">
                    <div class="item-name">Free Delivery</div>
                    <div class="item-details">Above ₹299</div>
                </div>
            </div>
        </div>
        
        <!-- Contact -->
        <div class="contact-box">
            <h3>ORDER NOW</h3>
            <p style="font-size: 12pt; font-weight: bold;">📱 +91 9573 264 441</p>
            <p>📍 Kondapur, OYO Silver Key near RTO office | 🕐 12 PM - 12 AM Daily</p>
            <p style="margin-top: 5px; font-style: italic; font-size: 8pt;">
                "From developer's midnight craving to CEO's board meeting - We deliver!"
            </p>
            <p style="margin-top: 10px; color: #FFC107; font-weight: bold; font-size: 11pt;">RECEPTION - 9, KITCHEN - 8, WHATSAPP - 9573 264 441</p>
        </div>
    </div>
    
    <script>
        window.onload = function() {
            setTimeout(() => {
                window.print();
                window.onafterprint = function() {
                    window.close();
                };
            }, 500);
        };
    </script>
</body>
</html>
    `;
    
    printWindow.document.write(printDocument);
    printWindow.document.close();
}

// Replace the download function
window.downloadPDF = generateComplete2PagePDF;
