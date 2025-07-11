  // Add floating particles
        function createParticles() {
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                document.body.appendChild(particle);
            }
        }

        createParticles();

        function calculateAggregate() {
            const utmeScore = parseFloat(document.getElementById('utmeScore').value);
            const math = parseFloat(document.getElementById('math').value);
            const english = parseFloat(document.getElementById('english').value);
            const physics = parseFloat(document.getElementById('physics').value);
            const chemistry = parseFloat(document.getElementById('chemistry').value);
            const biology = parseFloat(document.getElementById('biology').value);

            // Validation
            if (!utmeScore || utmeScore < 0 || utmeScore > 400) {
                alert('Please enter a valid UTME score between 0 and 400');
                return;
            }

            if (!math || !english || !physics || !chemistry || !biology) {
                alert('Please select grades for all 5 O\'Level subjects');
                return;
            }

            // Calculate UTME contribution (75%)
            const utmeContribution = (utmeScore / 400) * 75;

            // Calculate O'Level contribution (25%)
            const olevelTotal = math + english + physics + chemistry + biology;
            const olevelAverage = olevelTotal / 5;
            const olevelContribution = (olevelAverage / 100) * 25;

            // Calculate final aggregate
            const aggregate = utmeContribution + olevelContribution;

            // Display results
            document.getElementById('aggregateScore').textContent = aggregate.toFixed(2);
            
            const resultDetails = `
                <div style="text-align: left;">
                    <strong>📊 Score Breakdown:</strong><br>
                    • UTME Score: ${utmeScore}/400<br>
                    • UTME Contribution (75%): ${utmeContribution.toFixed(2)}<br>
                    • O'Level Average: ${olevelAverage.toFixed(2)}<br>
                    • O'Level Contribution (25%): ${olevelContribution.toFixed(2)}<br>
                    <br>
                    <strong>🎯 Final Aggregate: ${aggregate.toFixed(2)}</strong>
                </div>
            `;
            document.getElementById('resultDetails').innerHTML = resultDetails;

            // Update WhatsApp link
            const whatsappMessage = `Hi Phemmy Expert! I just calculated my FUTA aggregate score as ${aggregate.toFixed(2)}. I need more information about FUTA admission requirements and guidance. Please help me!`;
            const whatsappLink = `https://wa.me/+2348109972243?text=${encodeURIComponent(whatsappMessage)}`;
            document.getElementById('whatsappBtn').href = whatsappLink;

            // Show modal
            document.getElementById('resultModal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('resultModal').style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('resultModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }

        // Add input animations
        document.querySelectorAll('.input-field, .grade-select').forEach(input => {
            input.addEventListener('focus', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            input.addEventListener('blur', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Add button click animation
        document.querySelector('.calculate-btn').addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });