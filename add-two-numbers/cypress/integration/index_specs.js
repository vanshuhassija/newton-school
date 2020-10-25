describe('Testing Simple App', () =>{
    it('Adding two +ve number', () =>{
        cy.visit('./index.html');
        cy.get('#num1').type('1');
        cy.get('#num2').type('2');
        cy.get('#mybtn').click();
        cy.get('#result').should(($result) =>{
            var x = $result.val();
            expect(x).to.equal('3');
        });
    })
})

describe('Testing Simple App', () =>{
    it('Adding +ve and -ve number', () =>{
        cy.visit('./index.html');
        cy.get('#num1').type('3');
        cy.get('#num2').type('-4');
        cy.get('#mybtn').click();
        cy.get('#result').should(($result) =>{
            var x = $result.val();
            expect(x).to.equal('-1');
        });
    });
})

describe('Testing Simple App', () =>{
    it('Addition with Zero', () =>{
           cy.visit('./index.html');
           cy.get('#num1').type('0');
           cy.get('#num2').type('-1');
           cy.get('#mybtn').click();
           cy.get('#result').should(($result) =>{
               var x = $result.val();
               expect(x).to.equal('-1');
           });
       });
   })

   describe('Testing Simple App', () =>{
    it('Adding two floating point numbers', () =>{
            cy.visit('./index.html');
            cy.get('#num1').type('2.5');
            cy.get('#num2').type('3.2');
            cy.get('#mybtn').click();
            cy.get('#result').should(($result) =>{
                var x = $result.val();
                expect(x).to.equal('5.7');
            });
        })
    })

    describe('Testing Simple App', () =>{
        it('Input other than number', () =>{
                cy.visit('./index.html');
                cy.get('#num1').type('qwe');
                cy.get('#num1').should(($num1) =>{
                    expect($num1.val()).to.equal('');
                })
                cy.get('#num2').type('qwe');
                cy.get('#num2').should(($num1) =>{
                    expect($num1.val()).to.equal('');
                })
            });
        })

        describe('Testing Simple App', () =>{
            it('Result Inputbox Disabled', () =>{
                cy.get('#result').should('be.disabled');
            })
        })
        