// Periodic Table Data
const periodicTableData = [
    // Row 1 (Period 1)
    { atomicNumber: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetal', column: 1, row: 1 },
    { atomicNumber: 2, symbol: 'He', name: 'Helium', category: 'noble-gas', column: 18, row: 1 },

    // Row 2 (Period 2)
    { atomicNumber: 3, symbol: 'Li', name: 'Lithium', category: 'alkali-metal', column: 1, row: 2 },
    { atomicNumber: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline-earth', column: 2, row: 2 },
    { atomicNumber: 5, symbol: 'B', name: 'Boron', category: 'metalloid', column: 13, row: 2 },
    { atomicNumber: 6, symbol: 'C', name: 'Carbon', category: 'nonmetal', column: 14, row: 2 },
    { atomicNumber: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetal', column: 15, row: 2 },
    { atomicNumber: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetal', column: 16, row: 2 },
    { atomicNumber: 9, symbol: 'F', name: 'Fluorine', category: 'halogen', column: 17, row: 2 },
    { atomicNumber: 10, symbol: 'Ne', name: 'Neon', category: 'noble-gas', column: 18, row: 2 },

    // Row 3 (Period 3)
    { atomicNumber: 11, symbol: 'Na', name: 'Sodium', category: 'alkali-metal', column: 1, row: 3 },
    { atomicNumber: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline-earth', column: 2, row: 3 },
    { atomicNumber: 13, symbol: 'Al', name: 'Aluminum', category: 'post-transition-metal', column: 13, row: 3 },
    { atomicNumber: 14, symbol: 'Si', name: 'Silicon', category: 'metalloid', column: 14, row: 3 },
    { atomicNumber: 15, symbol: 'P', name: 'Phosphorus', category: 'nonmetal', column: 15, row: 3 },
    { atomicNumber: 16, symbol: 'S', name: 'Sulfur', category: 'nonmetal', column: 16, row: 3 },
    { atomicNumber: 17, symbol: 'Cl', name: 'Chlorine', category: 'halogen', column: 17, row: 3 },
    { atomicNumber: 18, symbol: 'Ar', name: 'Argon', category: 'noble-gas', column: 18, row: 3 },

    // Row 4 (Period 4)
    { atomicNumber: 19, symbol: 'K', name: 'Potassium', category: 'alkali-metal', column: 1, row: 4 },
    { atomicNumber: 20, symbol: 'Ca', name: 'Calcium', category: 'alkaline-earth', column: 2, row: 4 },
    { atomicNumber: 21, symbol: 'Sc', name: 'Scandium', category: 'transition-metal', column: 3, row: 4 },
    { atomicNumber: 22, symbol: 'Ti', name: 'Titanium', category: 'transition-metal', column: 4, row: 4 },
    { atomicNumber: 23, symbol: 'V', name: 'Vanadium', category: 'transition-metal', column: 5, row: 4 },
    { atomicNumber: 24, symbol: 'Cr', name: 'Chromium', category: 'transition-metal', column: 6, row: 4 },
    { atomicNumber: 25, symbol: 'Mn', name: 'Manganese', category: 'transition-metal', column: 7, row: 4 },
    { atomicNumber: 26, symbol: 'Fe', name: 'Iron', category: 'transition-metal', column: 8, row: 4 },
    { atomicNumber: 27, symbol: 'Co', name: 'Cobalt', category: 'transition-metal', column: 9, row: 4 },
    { atomicNumber: 28, symbol: 'Ni', name: 'Nickel', category: 'transition-metal', column: 10, row: 4 },
    { atomicNumber: 29, symbol: 'Cu', name: 'Copper', category: 'transition-metal', column: 11, row: 4 },
    { atomicNumber: 30, symbol: 'Zn', name: 'Zinc', category: 'transition-metal', column: 12, row: 4 },
    { atomicNumber: 31, symbol: 'Ga', name: 'Gallium', category: 'post-transition-metal', column: 13, row: 4 },
    { atomicNumber: 32, symbol: 'Ge', name: 'Germanium', category: 'metalloid', column: 14, row: 4 },
    { atomicNumber: 33, symbol: 'As', name: 'Arsenic', category: 'metalloid', column: 15, row: 4 },
    { atomicNumber: 34, symbol: 'Se', name: 'Selenium', category: 'nonmetal', column: 16, row: 4 },
    { atomicNumber: 35, symbol: 'Br', name: 'Bromine', category: 'halogen', column: 17, row: 4 },
    { atomicNumber: 36, symbol: 'Kr', name: 'Krypton', category: 'noble-gas', column: 18, row: 4 },

    // Row 5 (Period 5)
    { atomicNumber: 37, symbol: 'Rb', name: 'Rubidium', category: 'alkali-metal', column: 1, row: 5 },
    { atomicNumber: 38, symbol: 'Sr', name: 'Strontium', category: 'alkaline-earth', column: 2, row: 5 },
    { atomicNumber: 39, symbol: 'Y', name: 'Yttrium', category: 'transition-metal', column: 3, row: 5 },
    { atomicNumber: 40, symbol: 'Zr', name: 'Zirconium', category: 'transition-metal', column: 4, row: 5 },
    { atomicNumber: 41, symbol: 'Nb', name: 'Niobium', category: 'transition-metal', column: 5, row: 5 },
    { atomicNumber: 42, symbol: 'Mo', name: 'Molybdenum', category: 'transition-metal', column: 6, row: 5 },
    { atomicNumber: 43, symbol: 'Tc', name: 'Technetium', category: 'transition-metal', column: 7, row: 5 },
    { atomicNumber: 44, symbol: 'Ru', name: 'Ruthenium', category: 'transition-metal', column: 8, row: 5 },
    { atomicNumber: 45, symbol: 'Rh', name: 'Rhodium', category: 'transition-metal', column: 9, row: 5 },
    { atomicNumber: 46, symbol: 'Pd', name: 'Palladium', category: 'transition-metal', column: 10, row: 5 },
    { atomicNumber: 47, symbol: 'Ag', name: 'Silver', category: 'transition-metal', column: 11, row: 5 },
    { atomicNumber: 48, symbol: 'Cd', name: 'Cadmium', category: 'transition-metal', column: 12, row: 5 },
    { atomicNumber: 49, symbol: 'In', name: 'Indium', category: 'post-transition-metal', column: 13, row: 5 },
    { atomicNumber: 50, symbol: 'Sn', name: 'Tin', category: 'post-transition-metal', column: 14, row: 5 },
    { atomicNumber: 51, symbol: 'Sb', name: 'Antimony', category: 'metalloid', column: 15, row: 5 },
    { atomicNumber: 52, symbol: 'Te', name: 'Tellurium', category: 'metalloid', column: 16, row: 5 },
    { atomicNumber: 53, symbol: 'I', name: 'Iodine', category: 'halogen', column: 17, row: 5 },
    { atomicNumber: 54, symbol: 'Xe', name: 'Xenon', category: 'noble-gas', column: 18, row: 5 },

    // Row 6 (Period 6) including lanthanides
    { atomicNumber: 55, symbol: 'Cs', name: 'Cesium', category: 'alkali-metal', column: 1, row: 6 },
    { atomicNumber: 56, symbol: 'Ba', name: 'Barium', category: 'alkaline-earth', column: 2, row: 6 },

    // Lanthanides (Row 8)
    { atomicNumber: 57, symbol: 'La', name: 'Lanthanum', category: 'lanthanide', column: 3, row: 8 },
    { atomicNumber: 58, symbol: 'Ce', name: 'Cerium', category: 'lanthanide', column: 4, row: 8 },
    { atomicNumber: 59, symbol: 'Pr', name: 'Praseodymium', category: 'lanthanide', column: 5, row: 8 },
    { atomicNumber: 60, symbol: 'Nd', name: 'Neodymium', category: 'lanthanide', column: 6, row: 8 },
    { atomicNumber: 61, symbol: 'Pm', name: 'Promethium', category: 'lanthanide', column: 7, row: 8 },
    { atomicNumber: 62, symbol: 'Sm', name: 'Samarium', category: 'lanthanide', column: 8, row: 8 },
    { atomicNumber: 63, symbol: 'Eu', name: 'Europium', category: 'lanthanide', column: 9, row: 8 },
    { atomicNumber: 64, symbol: 'Gd', name: 'Gadolinium', category: 'lanthanide', column: 10, row: 8 },
    { atomicNumber: 65, symbol: 'Tb', name: 'Terbium', category: 'lanthanide', column: 11, row: 8 },
    { atomicNumber: 66, symbol: 'Dy', name: 'Dysprosium', category: 'lanthanide', column: 12, row: 8 },
    { atomicNumber: 67, symbol: 'Ho', name: 'Holmium', category: 'lanthanide', column: 13, row: 8 },
    { atomicNumber: 68, symbol: 'Er', name: 'Erbium', category: 'lanthanide', column: 14, row: 8 },
    { atomicNumber: 69, symbol: 'Tm', name: 'Thulium', category: 'lanthanide', column: 15, row: 8 },
    { atomicNumber: 70, symbol: 'Yb', name: 'Ytterbium', category: 'lanthanide', column: 16, row: 8 },
    { atomicNumber: 71, symbol: 'Lu', name: 'Lutetium', category: 'lanthanide', column: 17, row: 8 },

    // Continuing Row 6
    { atomicNumber: 72, symbol: 'Hf', name: 'Hafnium', category: 'transition-metal', column: 4, row: 6 },
    { atomicNumber: 73, symbol: 'Ta', name: 'Tantalum', category: 'transition-metal', column: 5, row: 6 },
    { atomicNumber: 74, symbol: 'W', name: 'Tungsten', category: 'transition-metal', column: 6, row: 6 },
    { atomicNumber: 75, symbol: 'Re', name: 'Rhenium', category: 'transition-metal', column: 7, row: 6 },
    { atomicNumber: 76, symbol: 'Os', name: 'Osmium', category: 'transition-metal', column: 8, row: 6 },
    { atomicNumber: 77, symbol: 'Ir', name: 'Iridium', category: 'transition-metal', column: 9, row: 6 },
    { atomicNumber: 78, symbol: 'Pt', name: 'Platinum', category: 'transition-metal', column: 10, row: 6 },
    { atomicNumber: 79, symbol: 'Au', name: 'Gold', category: 'transition-metal', column: 11, row: 6 },
    { atomicNumber: 80, symbol: 'Hg', name: 'Mercury', category: 'transition-metal', column: 12, row: 6 },
    { atomicNumber: 81, symbol: 'Tl', name: 'Thallium', category: 'post-transition-metal', column: 13, row: 6 },
    { atomicNumber: 82, symbol: 'Pb', name: 'Lead', category: 'post-transition-metal', column: 14, row: 6 },
    { atomicNumber: 83, symbol: 'Bi', name: 'Bismuth', category: 'post-transition-metal', column: 15, row: 6 },
    { atomicNumber: 84, symbol: 'Po', name: 'Polonium', category: 'metalloid', column: 16, row: 6 },
    { atomicNumber: 85, symbol: 'At', name: 'Astatine', category: 'halogen', column: 17, row: 6 },
    { atomicNumber: 86, symbol: 'Rn', name: 'Radon', category: 'noble-gas', column: 18, row: 6 },

    // Row 7 (Period 7) including actinides
    { atomicNumber: 87, symbol: 'Fr', name: 'Francium', category: 'alkali-metal', column: 1, row: 7 },
    { atomicNumber: 88, symbol: 'Ra', name: 'Radium', category: 'alkaline-earth', column: 2, row: 7 },

    // Actinides (Row 9)
    { atomicNumber: 89, symbol: 'Ac', name: 'Actinium', category: 'actinide', column: 3, row: 9 },
    { atomicNumber: 90, symbol: 'Th', name: 'Thorium', category: 'actinide', column: 4, row: 9 },
    { atomicNumber: 91, symbol: 'Pa', name: 'Protactinium', category: 'actinide', column: 5, row: 9 },
    { atomicNumber: 92, symbol: 'U', name: 'Uranium', category: 'actinide', column: 6, row: 9 },
    { atomicNumber: 93, symbol: 'Np', name: 'Neptunium', category: 'actinide', column: 7, row: 9 },
    { atomicNumber: 94, symbol: 'Pu', name: 'Plutonium', category: 'actinide', column: 8, row: 9 },
    { atomicNumber: 95, symbol: 'Am', name: 'Americium', category: 'actinide', column: 9, row: 9 },
    { atomicNumber: 96, symbol: 'Cm', name: 'Curium', category: 'actinide', column: 10, row: 9 },
    { atomicNumber: 97, symbol: 'Bk', name: 'Berkelium', category: 'actinide', column: 11, row: 9 },
    { atomicNumber: 98, symbol: 'Cf', name: 'Californium', category: 'actinide', column: 12, row: 9 },
    { atomicNumber: 99, symbol: 'Es', name: 'Einsteinium', category: 'actinide', column: 13, row: 9 },
    { atomicNumber: 100, symbol: 'Fm', name: 'Fermium', category: 'actinide', column: 14, row: 9 },
    { atomicNumber: 101, symbol: 'Md', name: 'Mendelevium', category: 'actinide', column: 15, row: 9 },
    { atomicNumber: 102, symbol: 'No', name: 'Nobelium', category: 'actinide', column: 16, row: 9 },
    { atomicNumber: 103, symbol: 'Lr', name: 'Lawrencium', category: 'actinide', column: 17, row: 9 },

    // Continuing Row 7
    { atomicNumber: 104, symbol: 'Rf', name: 'Rutherfordium', category: 'transition-metal', column: 4, row: 7 },
    { atomicNumber: 105, symbol: 'Db', name: 'Dubnium', category: 'transition-metal', column: 5, row: 7 },
    { atomicNumber: 106, symbol: 'Sg', name: 'Seaborgium', category: 'transition-metal', column: 6, row: 7 },
    { atomicNumber: 107, symbol: 'Bh', name: 'Bohrium', category: 'transition-metal', column: 7, row: 7 },
    { atomicNumber: 108, symbol: 'Hs', name: 'Hassium', category: 'transition-metal', column: 8, row: 7 },
    { atomicNumber: 109, symbol: 'Mt', name: 'Meitnerium', category: 'transition-metal', column: 9, row: 7 },
    { atomicNumber: 110, symbol: 'Ds', name: 'Darmstadtium', category: 'transition-metal', column: 10, row: 7 },
    { atomicNumber: 111, symbol: 'Rg', name: 'Roentgenium', category: 'transition-metal', column: 11, row: 7 },
    { atomicNumber: 112, symbol: 'Cn', name: 'Copernicium', category: 'transition-metal', column: 12, row: 7 },
    { atomicNumber: 113, symbol: 'Nh', name: 'Nihonium', category: 'post-transition-metal', column: 13, row: 7 },
    { atomicNumber: 114, symbol: 'Fl', name: 'Flerovium', category: 'post-transition-metal', column: 14, row: 7 },
    { atomicNumber: 115, symbol: 'Mc', name: 'Moscovium', category: 'post-transition-metal', column: 15, row: 7 },
    { atomicNumber: 116, symbol: 'Lv', name: 'Livermorium', category: 'post-transition-metal', column: 16, row: 7 },
    { atomicNumber: 117, symbol: 'Ts', name: 'Tennessine', category: 'halogen', column: 17, row: 7 },
    { atomicNumber: 118, symbol: 'Og', name: 'Oganesson', category: 'noble-gas', column: 18, row: 7 }
];

const chemistryQuestions = {
    easy: [
        {
            question: "What is the symbol for Gold?",
            answers: ["Au", "Ag", "Fe", "Cu"],
            correct: 0
        },
        {
            question: "Which element has the atomic number 1?",
            answers: ["Helium", "Hydrogen", "Lithium", "Carbon"],
            correct: 1
        },
        {
            question: "What category of element is Neon?",
            answers: ["Alkali Metal", "Noble Gas", "Halogen", "Nonmetal"],
            correct: 1
        },
        {
            question: "Which element is essential for life and is found in water?",
            answers: ["Nitrogen", "Carbon", "Oxygen", "Hydrogen"],
            correct: 2
        },
        {
            question: "What is the most abundant element in Earth's atmosphere?",
            answers: ["Oxygen", "Carbon", "Nitrogen", "Hydrogen"],
            correct: 2
        },
        {
            question: "What is the symbol for Sodium?",
            answers: ["So", "Na", "Sd", "Sa"],
            correct: 1
        },
        {
            question: "Which of these is a halogen?",
            answers: ["Neon", "Chlorine", "Sodium", "Calcium"],
            correct: 1
        },
        {
            question: "What is the atomic number of Helium?",
            answers: ["1", "2", "3", "4"],
            correct: 1
        },
        {
            question: "Which element is essential for bones?",
            answers: ["Calcium", "Potassium", "Sodium", "Iron"],
            correct: 0
        },
        {
            question: "What is the most common element in the universe?",
            answers: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
            correct: 1
        }
    ],
    medium: [
        {
            question: "Which element is a liquid at room temperature?",
            answers: ["Mercury", "Iron", "Aluminum", "Copper"],
            correct: 0
        },
        {
            question: "What is the atomic number of Carbon?",
            answers: ["8", "6", "12", "14"],
            correct: 1
        },
        {
            question: "Which of these is a noble gas?",
            answers: ["Chlorine", "Xenon", "Sodium", "Phosphorus"],
            correct: 1
        },
        {
            question: "What category does Silicon belong to?",
            answers: ["Metal", "Nonmetal", "Metalloid", "Noble Gas"],
            correct: 2
        },
        {
            question: "Which element is used in nuclear power plants?",
            answers: ["Thorium", "Uranium", "Plutonium", "All of these"],
            correct: 3
        },
        {
            question: "What is the most electronegative element?",
            answers: ["Chlorine", "Oxygen", "Fluorine", "Nitrogen"],
            correct: 2
        },
        {
            question: "Which element is essential for photosynthesis?",
            answers: ["Nitrogen", "Magnesium", "Phosphorus", "Potassium"],
            correct: 1
        },
        {
            question: "What is the atomic mass of Carbon-12?",
            answers: ["12.0 u", "12.01 u", "13.0 u", "11.99 u"],
            correct: 0
        },
        {
            question: "Which element is used in semiconductors?",
            answers: ["Gold", "Silicon", "Copper", "Aluminum"],
            correct: 1
        },
        {
            question: "What is the most abundant metal in Earth's crust?",
            answers: ["Iron", "Aluminum", "Calcium", "Sodium"],
            correct: 1
        }
    ],
    hard: [
        {
            question: "Which lanthanide element has the atomic number 63?",
            answers: ["Europium", "Gadolinium", "Terbium", "Dysprosium"],
            correct: 0
        },
        {
            question: "What is the heaviest naturally occurring element?",
            answers: ["Lead", "Uranium", "Plutonium", "Thorium"],
            correct: 1
        },
        {
            question: "Which element was named after Marie Curie?",
            answers: ["Ruthenium", "Curium", "Polonium", "Radium"],
            correct: 2
        },
        {
            question: "What is the atomic number of Rutherfordium?",
            answers: ["103", "104", "105", "106"],
            correct: 1
        },
        {
            question: "Which element was discovered at Berkeley Lab and named after California?",
            answers: ["Berkelium", "Californium", "Lawrencium", "Americium"],
            correct: 1
        },
        {
            question: "What is the first synthetic element?",
            answers: ["Plutonium", "Technetium", "Neptunium", "Americium"],
            correct: 1
        },
        {
            question: "Which element has the highest melting point?",
            answers: ["Tungsten", "Osmium", "Rhenium", "Tantalum"],
            correct: 0
        },
        {
            question: "What is the most radioactive element?",
            answers: ["Polonium", "Plutonium", "Uranium", "Radium"],
            correct: 0
        },
        {
            question: "Which element was named after Einstein?",
            answers: ["Einsteinium", "Fermium", "Nobelium", "Rutherfordium"],
            correct: 0
        },
        {
            question: "What is the atomic number of Copernicium?",
            answers: ["110", "111", "112", "113"],
            correct: 2
        }
    ]
};

class PeriodicTableQuiz {
    constructor() {
        this.score = 0;
        this.currentQuestion = null;
        this.difficulty = 'easy';
        this.questions = [];
        this.initializePeriodicTable();
        this.fetchQuestions();
        this.isLoading = true;
    }

    // Add this new method to fetch questions from the API
    async fetchQuestions() {
        this.showLoading();
        // Update the URL to get chemistry questions
        const url = 'https://quizapi.io/api/v1/questions?category=chemistry&limit=20';
        const options = {
            method: 'GET',
            headers: {
                'X-Api-Key': '4359430725msh8d26b3e2762caeap17a7c0jsne4725fc6f216'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            
            // Process and store the questions
            this.questions = this.processApiQuestions(data);
            this.initializeQuiz();
        } catch (error) {
            console.error('Error fetching questions:', error);
            // Fallback to local questions if API fails
            this.questions = chemistryQuestions;
            this.initializeQuiz();
        }
    }

    // Update the process method to handle the API response format
    processApiQuestions(apiData) {
        const processedQuestions = {
            easy: [],
            medium: [],
            hard: []
        };

        apiData.forEach(question => {
            // Get all answers and filter out null/empty ones
            const answers = [
                question.answers.answer_a,
                question.answers.answer_b,
                question.answers.answer_c,
                question.answers.answer_d
            ].filter(answer => answer);

            // Find the correct answer
            let correctIndex = 0;
            if (question.correct_answer === 'answer_b') correctIndex = 1;
            if (question.correct_answer === 'answer_c') correctIndex = 2;
            if (question.correct_answer === 'answer_d') correctIndex = 3;

            const processedQuestion = {
                question: question.question,
                answers: answers,
                correct: correctIndex
            };

            // Determine difficulty based on question complexity
            const difficulty = question.difficulty || 'medium';
            processedQuestions[difficulty].push(processedQuestion);
        });

        return processedQuestions;
    }

    // Add helper method to shuffle arrays
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    initializePeriodicTable() {
        const tableContainer = document.getElementById('periodic-table');
        
        // Clear existing content
        tableContainer.innerHTML = '';

        // Add lanthanides and actinides labels
        const lanthanideLabel = document.createElement('div');
        lanthanideLabel.className = 'element-cell spacer';
        lanthanideLabel.textContent = '57-71 Lanthanides';
        lanthanideLabel.style.gridRow = '6';

        const actinideLabel = document.createElement('div');
        actinideLabel.className = 'element-cell spacer';
        actinideLabel.textContent = '89-103 Actinides';
        actinideLabel.style.gridRow = '7';

        tableContainer.appendChild(lanthanideLabel);
        tableContainer.appendChild(actinideLabel);

        // Create and position elements
        periodicTableData.forEach(element => {
            const elementDiv = document.createElement('div');
            elementDiv.className = `element ${element.category}`;
            elementDiv.setAttribute('data-atomic-number', element.atomicNumber);
            elementDiv.setAttribute('data-element', element.symbol);
            
            elementDiv.innerHTML = `
                <div class="atomic-number">${element.atomicNumber}</div>
                <div class="symbol">${element.symbol}</div>
                <div class="name">${element.name}</div>
            `;

            // Position the element
            if ((element.atomicNumber >= 57 && element.atomicNumber <= 71) ||
                (element.atomicNumber >= 89 && element.atomicNumber <= 103)) {
                // Create separate sections for lanthanides and actinides
                const sectionClass = element.atomicNumber <= 71 ? 'lanthanides-section' : 'actinides-section';
                let section = tableContainer.querySelector(`.${sectionClass}`);
                if (!section) {
                    section = document.createElement('div');
                    section.className = sectionClass;
                    tableContainer.appendChild(section);
                }
                section.appendChild(elementDiv);
            } else {
                elementDiv.style.gridColumn = element.column;
                elementDiv.style.gridRow = element.row;
                tableContainer.appendChild(elementDiv);
            }
        });

        // Add toggle functionality
        const toggleButton = document.getElementById('toggle-table');
        const showButton = document.getElementById('show-table');
        const tableContainerElement = document.querySelector('.periodic-table-container');
        const periodicTable = document.getElementById('periodic-table');

        toggleButton.addEventListener('click', () => {
            periodicTable.style.display = 'none';
            toggleButton.style.display = 'none';
            showButton.style.display = 'block';
        });

        showButton.addEventListener('click', () => {
            periodicTable.style.display = 'grid';
            toggleButton.style.display = 'block';
            showButton.style.display = 'none';
        });
    }

    initializeQuiz() {
        this.hideLoading();
        this.score = 0;
        document.getElementById('score').textContent = this.score;
        
        // Set up difficulty buttons
        const difficultyButtons = document.querySelectorAll('.difficulty-btn');
        difficultyButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.difficulty = button.dataset.difficulty;
                this.loadNewQuestion();
            });
        });

        // Set up next button
        const nextButton = document.getElementById('next-btn');
        nextButton.addEventListener('click', () => this.loadNewQuestion());

        // Initial question
        this.loadNewQuestion();
    }

    loadNewQuestion() {
        const questions = this.questions[this.difficulty];
        if (!questions || questions.length === 0) {
            document.getElementById('question-text').textContent = 'No questions available for this difficulty level.';
            return;
        }

        const questionIndex = Math.floor(Math.random() * questions.length);
        this.currentQuestion = questions[questionIndex];

        document.getElementById('question-text').textContent = this.currentQuestion.question;
        const answerButtons = document.querySelectorAll('.answer-btn');
        
        answerButtons.forEach((button, index) => {
            button.textContent = this.currentQuestion.answers[index];
            button.className = 'answer-btn';
            button.disabled = false;
            button.replaceWith(button.cloneNode(true));
        });

        document.querySelectorAll('.answer-btn').forEach((button, index) => {
            button.addEventListener('click', () => this.checkAnswer(index));
        });

        document.getElementById('next-btn').style.display = 'none';
    }

    checkAnswer(answerIndex) {
        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach(button => button.disabled = true);

        if (answerIndex === this.currentQuestion.correct) {
            buttons[answerIndex].classList.add('correct');
            this.score++;
            document.getElementById('score').textContent = this.score;
            
            // Trigger confetti for correct answer
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        } else {
            buttons[answerIndex].classList.add('wrong');
            buttons[this.currentQuestion.correct].classList.add('correct');
        }

        document.getElementById('next-btn').style.display = 'block';
    }

    showLoading() {
        const loadingIndicator = document.getElementById('loading-indicator');
        const questionText = document.getElementById('question-text');
        const answersContainer = document.getElementById('answers-container');

        loadingIndicator.style.display = 'block';
        questionText.style.display = 'none';
        answersContainer.style.display = 'none';

        document.querySelectorAll('.answer-btn').forEach(button => {
            button.disabled = true;
        });
    }

    // Add this method to hide loading
    hideLoading() {
        const loadingIndicator = document.getElementById('loading-indicator');
        const questionText = document.getElementById('question-text');
        const answersContainer = document.getElementById('answers-container');

        loadingIndicator.style.display = 'none';
        questionText.style.display = 'block';
        answersContainer.style.display = 'flex';

        document.querySelectorAll('.answer-btn').forEach(button => {
            button.disabled = false;
        });
    }
}

class TriviaPopup {
    constructor() {
        this.popup = document.getElementById('trivia-popup');
        this.questionContainer = document.getElementById('trivia-question');
        this.answersContainer = document.getElementById('trivia-answers');
        this.nextButton = document.getElementById('next-trivia');
        this.scoreElement = document.getElementById('trivia-score');
        this.score = 0;
        this.currentQuestion = null;

        // Initialize event listeners
        document.getElementById('other-trivia-btn').addEventListener('click', () => this.openPopup());
        document.querySelector('.close-popup').addEventListener('click', () => this.closePopup());
        this.nextButton.addEventListener('click', () => this.loadQuestion());

        // Close popup when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === this.popup) {
                this.closePopup();
            }
        });
    }

    async loadQuestion() {
        try {
            const response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
            const data = await response.json();
            
            if (data.results && data.results.length > 0) {
                this.currentQuestion = data.results[0];
                this.displayQuestion();
            }
        } catch (error) {
            console.error('Error fetching trivia question:', error);
            this.questionContainer.textContent = 'Error loading question. Please try again.';
        }
    }

    displayQuestion() {
        // Display question
        this.questionContainer.innerHTML = this.currentQuestion.question;
        
        // Prepare answers
        let answers = [
            ...this.currentQuestion.incorrect_answers,
            this.currentQuestion.correct_answer
        ];
        answers = this.shuffleArray(answers);

        // Create answer buttons
        this.answersContainer.innerHTML = '';
        answers.forEach(answer => {
            const button = document.createElement('button');
            button.className = 'trivia-answer-btn';
            button.innerHTML = answer;
            button.addEventListener('click', () => this.checkAnswer(answer));
            this.answersContainer.appendChild(button);
        });

        this.nextButton.style.display = 'none';
    }

    checkAnswer(selectedAnswer) {
        const buttons = this.answersContainer.querySelectorAll('.trivia-answer-btn');
        buttons.forEach(button => {
            button.disabled = true;
            if (button.innerHTML === this.currentQuestion.correct_answer) {
                button.classList.add('correct');
            } else if (button.innerHTML === selectedAnswer) {
                button.classList.add('wrong');
            }
        });

        if (selectedAnswer === this.currentQuestion.correct_answer) {
            this.score++;
            this.scoreElement.textContent = this.score;
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

        this.nextButton.style.display = 'block';
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    openPopup() {
        this.popup.style.display = 'block';
        this.score = 0;
        this.scoreElement.textContent = '0';
        this.loadQuestion();
    }

    closePopup() {
        this.popup.style.display = 'none';
    }
}

// Initialize both quizzes when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Check device size
    function checkDeviceSize() {
        const minWidth = 768; // Minimum width in pixels (equivalent to approximately 10 inches)
        const screenWidth = window.innerWidth;
        
        const warningElement = document.getElementById('device-warning');
        const mainContent = document.querySelector('.main-container');
        
        if (screenWidth < minWidth) {
            warningElement.style.display = 'flex';
            mainContent.style.display = 'none';
        } else {
            warningElement.style.display = 'none';
            mainContent.style.display = 'flex';
        }
    }

    // Check on load and resize
    checkDeviceSize();
    window.addEventListener('resize', checkDeviceSize);

    // Initialize the quizzes only if device is large enough
    if (window.innerWidth >= 768) {
        new PeriodicTableQuiz();
        new TriviaPopup();
    }
});
