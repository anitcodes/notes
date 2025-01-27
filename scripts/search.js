// Define the searchable content structure
const searchableContent = {
    notes: {
        'Data Structures and Algorithms': [
            { title: 'Introduction', url: '#' },
            { title: 'Stack', url: '#' },
            { title: 'Queue', url: '#' },
            { title: 'Recursion', url: '#' },
            { title: 'Lists', url: '#' },
            { title: 'Sorting', url: '#' },
            { title: 'Searching and Hashing', url: '#' },
            { title: 'Trees and Graphs', url: '#' }
        ],
        'Numerical Methods': [
            { title: 'Interpolation and Regression', url: 'assets/pdfs/nm-errors.pdf' },
            { title: 'Numerical Differentiation and Integration', url: 'assets/pdfs/nm-integration.pdf' },
            { title: 'Solving System of Linear Equations', url: 'assets/pdfs/nm-equations.pdf' },
            { title: 'Solving of Ordinary Differential Equations', url: 'assets/pdfs/nm-equations.pdf' },
            { title: 'Solving of Partial Differential Equations', url: 'assets/pdfs/nm-equations.pdf' }
        ],
        'Computer Architecture': [
            { title: 'Introduction to Computer Architecture', url: 'assets/pdfs/ca-intro.pdf' },
            { title: 'Digital Logic Circuits', url: 'assets/pdfs/ca-digital.pdf' },
            { title: 'Data Representation', url: 'assets/pdfs/ca-data.pdf' },
            { title: 'Register Transfer and Microoperations', url: 'assets/pdfs/ca-register.pdf' },
            { title: 'Computer Instructions', url: 'assets/pdfs/ca-instruction.pdf' },
            { title: 'Computer Arithmetic', url: 'assets/pdfs/ca-arithmetic.pdf' },
            { title: 'Control Unit', url: 'assets/pdfs/ca-control.pdf' },
            { title: 'Pipeline and Vector Processing', url: 'assets/pdfs/ca-pipeline.pdf' }
        ],
        'Computer Graphics': [
            { title: 'Graphics Fundamentals', url: 'assets/pdfs/cg-basics.pdf' },
            { title: 'Drawing Algorithms', url: 'assets/pdfs/cg-algorithms.pdf' },
            { title: '2D Transformations', url: 'assets/pdfs/cg-transforms.pdf' },
            { title: '3D Graphics', url: 'assets/pdfs/cg-3d.pdf' }
        ],
        'Statistics II': [
            { title: 'Regression Analysis', url: 'assets/pdfs/stat2-regression.pdf' },
            { title: 'Correlation Analysis', url: 'assets/pdfs/stat2-correlation.pdf' },
            { title: 'Time Series Analysis', url: 'assets/pdfs/stat2-time-series.pdf' },
            { title: 'Design of Experiments', url: 'assets/pdfs/stat2-design.pdf' },
            { title: 'Statistical Quality Control', url: 'assets/pdfs/stat2-quality.pdf' }
        ]
    },
    assignments: {
        'Data Structures and Algorithms': [
            { title: 'Assignment 1: Sorting & Searching', url: 'assets/pdfs/dsa-assignment1.pdf' },
            { title: 'Assignment 2: Trees & Graphs', url: 'assets/pdfs/dsa-assignment2.pdf' },
            { title: 'Assignment 3: Dynamic Programming', url: 'assets/pdfs/dsa-assignment3.pdf' }
        ],
        // Add other subjects' assignments similarly
    },
    // Add other categories (previous questions, model questions, lab reports)
};

// Create search results container
const createSearchResults = () => {
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'search-results';
    document.querySelector('.search-box').appendChild(resultsContainer);
    return resultsContainer;
};

// Search function
const performSearch = (query) => {
    const results = [];
    query = query.toLowerCase();

    // Search through all categories and subjects
    Object.entries(searchableContent).forEach(([category, subjects]) => {
        Object.entries(subjects).forEach(([subject, items]) => {
            items.forEach(item => {
                if (item.title.toLowerCase().includes(query) || 
                    subject.toLowerCase().includes(query)) {
                    results.push({
                        category,
                        subject,
                        ...item
                    });
                }
            });
        });
    });

    return results;
};

// Display search results
const displayResults = (results, container) => {
    if (results.length === 0) {
        container.innerHTML = '<p class="no-results">No results found</p>';
        return;
    }

    const resultsHTML = results.map(result => `
        <a href="${result.url}" class="search-result-item">
            <div class="result-title">${result.title}</div>
            <div class="result-meta">
                <span class="result-subject">${result.subject}</span>
                <span class="result-category">${result.category}</span>
            </div>
        </a>
    `).join('');

    container.innerHTML = resultsHTML;
};

// Initialize search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-box input');
    const resultsContainer = createSearchResults();

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length < 2) {
            resultsContainer.style.display = 'none';
            return;
        }

        const results = performSearch(query);
        displayResults(results, resultsContainer);
        resultsContainer.style.display = 'block';
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            resultsContainer.style.display = 'none';
        }
    });
}); 