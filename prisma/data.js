export const processes = [
    {
        "id": "GBP1",
        "name": "Lending",
        "description": "Loans to customers and related interest income."
    },
    {
        "id": "GBP2",
        "name": "Credit",
        "description": "Calculation of the allowance for loan losses and the reserve for unfunded lending commitments."
    },
    {
        "id": "GBP6",
        "name": "Sales and securitization",
        "description": "Transfers of financial assets accounted for as sales, including related recognition of servicing income and retained interests."
    },
    {
        "id": "GBP1.7",
        "name": "Brokerage",
        "description": "Trading and dealing of securities for brokerage and commission income, engaging in security transfers, and maintenance of customer margin accounts."
    },
    {
        "id": "GBP1.8",
        "name": "Trust and Custody",
        "description": "Physical possession and recordkeeping of assets and security transactions on behalf of customers, and recording of related income."
    },
    {
        "id": "GBP3",
        "name": "Deposits",
        "description": "Customer deposits and related interest expense."
    },
    {
        "id": "GBP4",
        "name": "Human resources",
        "description": "Employment and payment of staff, including payroll, bonuses, pensions and share based payments."
    },
    {
        "id": "GBP5",
        "name": "Treasury",
        "description": "Borrowing from and lending to third party financial institutions, repurchase agreements, and reverse repurchase agreements used for funding purposes."
    },
    {
        "id": "GBP8",
        "name": "Investments",
        "description": "Debt and equity securities."
    },
    {
        "id": "GBP7",
        "name": "Derivatives",
        "description": "Entering into derivative instruments with customers and other financial intermediaries, designation of accounting hedges and related accounting."
    },
    {
        "id": "BSP2",
        "name": "Purchases - services and consumables",
        "description": "Purchase of goods and services including utilities and office supplies, trade and other payables. Recording of accrued and prepaid expenses."
    },
    {
        "id": "P5.8",
        "name": "Provisions",
        "description": "Creation, increase, utilization and/ or release of provisions. Addresses the following types of provision: litigation, claims and assessments, environmental, asset retirement obligations and generic ‘other’ provisions."
    },
    {
        "id": "P7",
        "name": "Property, plant and equipment",
        "description": "Acquisition, capital expenditure, depreciation, impairment testing and disposal of property, plant and equipment. Recording and classification of finance and operating leases."
    },
    {
        "id": "P6",
        "name": "Intangibles",
        "description": "Acquisition, capital expenditure, amortization and impairment testing."
    },
    {
        "id": "P7.5",
        "name": "Related parties",
        "description": "Identification of related party relationships and the recording of related party transactions, assets and liabilities."
    },
    {
        "id": "P8",
        "name": "Taxation",
        "description": "Corporate income taxes, deferred taxes."
    },
    {
        "id": "P13",
        "name": "Equity",
        "description": "Share capital and reserves (including preference shares and treasury stock), non-controlling interests, dividends, other equity movements."
    }
];

export const risks = [
    {
        "processId": "GBP1",
        "id": "GBLWCGW001",
        "name": "Authorization and recording of loans",
        "description": "Loans are not properly authorized, recorded or the incorrect loan amount is funded to or on behalf of the customer."
    },
    {
        "processId": "GBP1",
        "id": "GBLWCGW002",
        "name": "Entry of loan data",
        "description": "Loan-related data is incorrectly input into the system or for a non-existent customer."
    },
    {
        "processId": "GBP1",
        "id": "GBLWCGW003",
        "name": "Inappropriate or non-existent security",
        "description": "Inappropriate or non-existent security is offered by the borrower."
    },
    {
        "processId": "GBP1",
        "id": "GBLWCGW004",
        "name": "System interface loan sub-ledger/ general ledger",
        "description": "The loan sub-ledger incorrectly interfaces with the general ledger."
    },
    {
        "processId": "GBP1",
        "id": "GBLWCGW005",
        "name": "Interest income and accruals",
        "description": "Interest income and accruals might not be calculated or recorded correctly."
    },
    {
        "processId": "GBP1",
        "id": "GBLWCGW006",
        "name": "Calculation and recording of fee income",
        "description": "Fee income and contract liabilities - loan fee income may not be calculated or recorded correctly."
    },
    {
        "processId": "GBP1",
        "id": "GBLWCGW007",
        "name": "Recording of cash received",
        "description": "Cash received is not recorded or is recorded at an incorrect amount or to the incorrect loan account."
    },
    {
        "processId": "GBP1",
        "id": "GBLWCGW008",
        "name": "Monitoring of loan payments",
        "description": "Loan payments are not properly monitored and the aging of loans receivable is not updated on a timely basis."
    },
    {
        "processId": "GBP1",
        "id": "GBLWCGW009",
        "name": "Calculation and recording of customer escrows and customer escrow payments",
        "description": "Customer escrows are not properly entered into the system, calculated or recorded and customer escrow payments are not made when required or not properly recorded."
    },
    {
        "processId": "GBP1",
        "id": "GBIWCGW009",
        "name": "Inappropriate access - General Banking",
        "description": "An employee may have the ability to initiate, authorize and record a transaction or may have custody of assets within the process such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "GBP1",
        "id": "GBLWCGW010",
        "name": "Borrower quality and risk analysis",
        "description": "The creditworthiness of a borrower is improperly  assessed, resulting in an  underestimation of risk."
    },
    {
        "processId": "GBP1",
        "id": "GBLWCGW011",
        "name": "Deferral of loan fees and costs",
        "description": "Loan fees and costs are not properly capitalized as permitted or required by accounting standards."
    },
    {
        "processId": "GBP2",
        "id": "WCGW400",
        "name": "Inappropriate access - HR process",
        "description": "An employee may have the ability to initiate, authorize and record a transaction or may have custody of assets within the process, such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "GBP2",
        "id": "GBCWCGW001",
        "name": "Loan loss allowance estimate",
        "description": "There are errors in the preparation of the estimate, caused by:\n• errors in the data inputs.\n• inappropriate assumptions.\n• not applying the requirements of the applicable financial reporting framework.\n• inaccurate computation."
    },
    {
        "processId": "GBP2",
        "id": "GBCWCGW002",
        "name": "Allowance of loan losses and reserve for unfunded loan commitments disclosure",
        "description": "There are errors in the preparation of the allowance of loan losses and reserve for unfunded loan commitments disclosure caused by:\n• errors in the underlying data;\n• inappropriate factors or  assumptions;\n• not applying the entity’s accounting policies;\n• inaccurate computation."
    },
    {
        "processId": "GBP2",
        "id": "GBCWCGW003",
        "name": "Valuation and recording of foreclosed property",
        "description": "Foreclosed property is incorrectly valued or recorded."
    },
    {
        "processId": "GBP2",
        "id": "GBCWCGW004",
        "name": "Proceeds from the sales of foreclosed property",
        "description": "Proceeds from the sales of foreclosed property are not received or are recorded at an incorrect amount."
    },
    {
        "processId": "GBP2",
        "id": "GBIWCGW009",
        "name": "Inappropriate access - General Banking",
        "description": "An employee may have the ability to initiate, authorize and record a transaction or may have custody of assets within the process such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "GBP2",
        "id": "GBCWCGW005",
        "name": "Loan grading and regulatory classification",
        "description": "There are errors in the grading and regulatory classification of problem loans caused by inappropriate assumptions or evaluation of credit quality."
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW008",
        "name": "Inappropriate loan portfolio segmentation",
        "description": "The bank's loan portfolio segmentation is inappropriate - e.g. not all relevant credit risk characteristics haven been identified for identified loan portfolios or the segmentation is not based on the bank's documented policy."
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW009",
        "name": "Inappropriate credit risk assessment on initial recognition",
        "description": "Information at loan origination used to determine credit risk on initial recognition is not appropriate, accurate or complete."
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW010",
        "name": "Purchased or originated credit-impaired loans not identified on initial recognition",
        "description": "The policy for identifying POCI loans is not properly implemented or the initial assessment of default is not properly performed."
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW011",
        "name": "Troubled loans identification",
        "description": "Troubled loans are not identified, or not identified in a timely manner to take further action."
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW012",
        "name": "Inaccurate calculation of DPD",
        "description": "Days past due (DPD) are not accurately calculated in accordance with the stated policy ."
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW013",
        "name": "Inappropriate loan write-offs",
        "description": "Write-offs are not accurately and completely recognized in accordance with the stated policy."
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW014",
        "name": "Improper forward-looking information incorporation",
        "description": "Forward-looking information is not properly incorporated as designed:\n[•  into individual risk ratings/individual credit reviews, for individually assessed loans; or\n•  as a macro-overlay to staging criteria/ PD calibration \nOR\nForward-looking information is double-counted.\n\nForward-looking information is not properly incorporated to reflect underlying circumstances.]"
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW015",
        "name": "Credit risk rating process",
        "description": "[• Credit risk rating policy is not properly implemented as designed;\n• Credit risk ratings may not be adequately/ appropriately assessed and applied to loan accounts; or are not be reviewed on a timely basis; or may not be accurately recorded in the system;\n• The bank’s credit risk rating scale is not calibrated to approximate underlying credit risk of exposures.]\n"
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW016",
        "name": "Incomplete record of loan modification",
        "description": "The record of loan modifications in the bank’s system is not completed."
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW017",
        "name": "Inappropriate or incomplete SICR criteria",
        "description": "SICR criteria are not appropriate or complete, which may lead to exposures that have experienced SICR not being identified."
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW018",
        "name": "Inappropriate model for ECL estimates",
        "description": "The model for ECL estimates does not include appropriate interpretations of financial reporting requirements and credit risk processes, including:\n[• How ECL measurement components will be modelled in line with design requirements;\n• Complete and accurate incorporation of forward-looking information (including on the borrower) per the accounting policy (i.e. design decisions);\n• Consideration for complete data sets for variables required; and\n• Key principles on how calculations are compounded or inter-relationship with other models.]\n"
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW019",
        "name": "Incorrect data for model for ECL estimates",
        "description": "[• Inappropriate data governance standards/framework, such that data is not captured, stored, managed, changed in a controlled manner.\n• Data is not consistent/available across time periods.\n• Data is not appropriately included in ECL processes (e.g. non-discriminative indicators are used in ECL modelling or segmented in an inappropriate way).\n• Data is not accurately included in secondary modelling processes (e.g. inputs not captured into ECL process, failures in ECL process).]"
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW020",
        "name": "Macro-economic forecasts not reasonable",
        "description": "Macro-economic forecasts are outside a reasonable range due to:\n[• Management bias that leads to an ECL measurement that is too optimistic or pessimistic;\n• Analysis not being performed on a timely basis to capture economic conditions relevant at the reporting date;\n• Inappropriate consideration of the significance of each possible economic risk or assumption on ECL based on conditions at the reporting date; and\n• A change in economic conditions that were not in line with initial estimates.]\n"
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW002",
        "name": "Definition of default not appropriate",
        "description": "The definition of default is not appropriate that:\n[• it is not aligned with internal credit risk management processes.\n• it does not consider relevant qualitative factors (where applicable).\n• it allows loans over 90 days past due not be considered to be in default without having quantitative support for this.\n• it use different definitions of default for different products without appropriate justification.\n• it is not aligned with assets that would be considered credit impaired under IFRS 9.\n• there are unexplainable or unacceptable differences between the regulatory and accounting definition of default, or no differences when a difference would appropriate.\n• the regulatory definition of default is used without adjustments to bring it into line with IFRS 9 requirements.]"
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW003",
        "name": "Inappropriate estimating  probability of default (PD)",
        "description": "The probability of default (PD) is not correctly estimated in calculating ECLs or assessing whether a significant increase in credit risk has occurred, which is due to that:\n[• management has not identified appropriate PD risk drivers, leading to inaccurate calculation of PD.\n• management does not appropriately take into account instrument features or actions that would impact the period of exposure.\n• historical data used to assess the period of exposure does not adequately reflect the expected obligor behavior for the current portfolio.\n• the mathematical formulas used to derive the period of exposure and PD from the data set are incorrect.\n• the period of exposure for drawn/ undrawn revolving facilities is not correctly identified.\n• regulatory PDs or data sets are used for the ECL measurement without necessary adjustments.\n• rating agency information used when calculating PDs leads to a non-IFRS 9 compliant PD.\n• management's mapping of internal credit ratings to the external credit agency ratings is not appropriate, leading to incorrect PD assessments.\n• PDs are not adjusted for qualitative information that becomes available during the SICR assessment.]"
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW004",
        "name": "Inappropriate exposure at default (EAD) estimates ",
        "description": "The estimation of exposure at default (EAD) is not appropriate, which is due to that:\n[• management does not identify the products and facilities that have significant non-contractual payments or undrawn elements and, as a result, applies an inappropriate methodology.\n• the mathematical formulas used to derive the EAD from the data set are incorrect.\n• management does not review the EAD once it has been established, which could lead to inaccurate ECL measurement if the assumptions are incorrect.]"
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW005",
        "name": "Inappropriate loss given default (LGD) estimates ",
        "description": "The estimate of loss given default (LGD) to calculate expected cash flows is inappropriate, which is due to that:\n[• differences between the regulatory LGD and an accounting LGD are not appropriately identified and/ or adjusted.\n• management does not identify and include all significant components of LGD.\n• historical data does not reflect the current portfolio or managements' expectations.\n• future cash flows are discounted using an inappropriate rate.\n• the mathematical formulas used to derive the LGD from the data set are incorrect.\n• inappropriate collateral valuations are used when assessing LGD.]"
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW006",
        "name": "Inappropriate effective interest rate used for discounting the cash shortfalls",
        "description": "An inappropriate effective interest rate is used for calculation of expected credit losses, which caused by:\n[• using discounting employed for regulatory purposes without evidencing that this is appropriate for financial reporting purposes.\n• continuing use of original effective interest rate approximations without assessing whether they are appropriate for financial reporting purposes.\n• not reflecting the effect of the time value of money in expected credit loss.\n• using discount rates which do not approximate the effective interest rate of the portfolio.]"
    },
    {
        "processId": "GBP2",
        "id": "GBWCGW007",
        "name": "Inappropriate assessment on whether the credit risk on a financial instrument increased significantly",
        "description": "The assessment on whether the credit risk on a financial instrument increased significantly is not appropriate, which is caused by:\n[• credit-impaired or POCI assets are not identified and measured separately, leading to incorrect income statement recognition and stage allocation for ECL measurement of a portfolio that includes credit-impaired or POCI assets.\n• management does not have a probation period, leading to frequent transfers of assets from Stage 2 to Stage 1, which subsequently deteriorate again.\n• credit risk on origination (or proxy) is not available to ensure that a relative assessment of SICR can be performed.\n• the data that management uses to establish SICR criteria, or apply staging criteria, is not complete or accurate, leading to an error in the staging assessment and ECL measurement.\n• the SICR assessment does not appropriately incorporate forward-looking information.\n• management uses the 30 days past due requirement without considering other relevant information.\n• management incorrectly rebuts SICR where contractual payments are more than 30 days past due.\n• the impact of modification on SICR is not assessed, leading to incorrect stage allocation.\n• late-breaking events occurring between the data of the SICR assessment and reporting date are not appropriately identified and considered.\n• the effectiveness of SICR criteria is not tested or monitored.]"
    },
    {
        "processId": "GBP6",
        "id": "GBMWCGW001",
        "name": "Classification of loans as held for sale",
        "description": "The entity does not properly classify loans as held for sale or the loans receivable balance."
    },
    {
        "processId": "GBP6",
        "id": "GBMWCGW002",
        "name": "Valuation of loans held for sale",
        "description": "The entity does not properly value loans held for sale."
    },
    {
        "processId": "GBP6",
        "id": "GBMWCGW003",
        "name": "Valuation of forward loan commitments",
        "description": "The entity does not properly value forward loan commitments."
    },
    {
        "processId": "GBP6",
        "id": "GBMWCGW004",
        "name": "Gains and losses and cash receipts from loan sales",
        "description": "Gains and losses and cash receipts from loan sales are not properly calculated and recorded."
    },
    {
        "processId": "GBP6",
        "id": "GBMWCGW005",
        "name": "Data entry into the [servicing subledger]",
        "description": "The entity improperly inputs data into the [servicing subledger]."
    },
    {
        "processId": "GBP6",
        "id": "GBMWCGW006",
        "name": "Calculation of the mortgage servicing asset",
        "description": "The entity does not properly calculate the fair value of the mortgage servicing asset at the time of loan sale."
    },
    {
        "processId": "GBP6",
        "id": "GBMWCGW007",
        "name": "Recording of the unpaid principal balance",
        "description": "The entity does not properly record the unpaid principal balance of the loan(s) sold into the [servicing subledger] and track subsequent changes in balance due to customer payments."
    },
    {
        "processId": "GBP6",
        "id": "GBMWCGW008",
        "name": "Amortization expense on mortgage servicing rights",
        "description": "The entity improperly records amortization expense and accumulated amortization on mortgage servicing assets."
    },
    {
        "processId": "GBP6",
        "id": "GBMWCGW009",
        "name": "Calculation and recording of mortgage servicing fee income",
        "description": "Mortgage servicing fee income may not be calculated or recorded correctly."
    },
    {
        "processId": "GBP6",
        "id": "GBMWCGW010",
        "name": "Recording of service income payments",
        "description": "Service income payments are not recorded appropriately."
    },
    {
        "processId": "GBP6",
        "id": "GBMWCGW011",
        "name": "Impairment of retained cash flows estimate",
        "description": "There are errors in the preparation of the estimate, caused by:\n• errors in the data inputs.\n• inappropriate assumptions.\n• not applying the requirements of the applicable financial reporting framework.\n• inaccurate computation."
    },
    {
        "processId": "GBP6",
        "id": "GBMWCGW012",
        "name": "Improper accounting for transfers of loans",
        "description": "The entity does not properly identify a transfer as either a sale or secured borrowing."
    },
    {
        "processId": "GBP6",
        "id": "GBTWCGW015",
        "name": "Error in applying fair value option",
        "description": "The fair value of debt issued by the entity carried at fair value is incorrectly estimated because of \n- inappropriate  assumptions\n- inaccurate computation"
    },
    {
        "processId": "GBP1.7",
        "id": "INBW1",
        "name": "Inappropriate customer",
        "description": "A customer is approved for services who:\n- is fraudulently approved\n- is not reputable or exposes the entity to regulatory sanction\n- is not credit worthy\n- presents market risk that exceed limits\n- is otherwise unsuitable"
    },
    {
        "processId": "GBP1.7",
        "id": "INBW2",
        "name": "Brokerage agreement data",
        "description": "Customer account agreement data are entered onto the underwriting system:\n- fraudulently,\n- on terms that expose the entity to unacceptable legal risk,\n- on terms that do not match the customer's or entity's understanding of the arrangement,\n- that are otherwise unsuitable."
    },
    {
        "processId": "GBP1.7",
        "id": "INBW3",
        "name": "Trading error (self cleared trades)",
        "description": "Security trades are:\n- not authorized,\n- not recorded,\n- recorded in the incorrect amount,\n- recorded to the wrong customer account,\n- executed under incorrect terms"
    },
    {
        "processId": "GBP1.7",
        "id": "INBW4",
        "name": "Trading error - clearing broker used",
        "description": "A security trade processed by a clearing broker is not completed because:\n- it is not transmitted properly to the clearing broker\n- cash or securities are not transmitted properly to the clearing broker"
    },
    {
        "processId": "GBP1.7",
        "id": "INBW5",
        "name": "Trade allocation error",
        "description": "Security trades executed on behalf of multiple customers are incorrectly allocated to each customer"
    },
    {
        "processId": "GBP1.7",
        "id": "INBW6",
        "name": "Failed settlement",
        "description": "Security trades fail to settle because:\n- unacceptable cash or securities are received,\n- unacceptable securities are delivered"
    },
    {
        "processId": "GBP1.7",
        "id": "INBW7",
        "name": "Failed trade identification error",
        "description": "A successful trade is incorrectly identified as a failed trade, or a failed trade is not identified because:\n- the trader does not receive notice from the counterparty or exchange\n- the trader incorrectly enters the trade details into the trading system\n- the trader fails to enter the trade confirmation into the trading system"
    },
    {
        "processId": "GBP1.7",
        "id": "INBW8",
        "name": "Brokerage fee errors",
        "description": "Brokerage account maintenance and transaction fees are:\n- not appropriately withdrawn from customer accounts,\n- not booked,\n- recorded in the incorrect amount,\n- fraudulently misappropriated."
    },
    {
        "processId": "GBP1.7",
        "id": "INBW9",
        "name": "Breach of capital requirements",
        "description": "Regulatory capital requirements are incorrectly computed, caused by:\n- errors in the underlying trade volume data,\n- failure to recognize trading or operating losses\n- computational errors\n- errors in the underlying brokerage subledger"
    },
    {
        "processId": "GBP1.7",
        "id": "INBW10",
        "name": "Customer asset misappropriation",
        "description": "Customer assets are:\n- fraudulently diverted\n- inappropriately commingled with assets of the entity or other customers\n- inappropriately used to settle other customer transactions"
    },
    {
        "processId": "GBP1.7",
        "id": "INBW11",
        "name": "Brokerage general ledger error",
        "description": "Entries in the general ledger and brokerage system do not agree"
    },
    {
        "processId": "GBP1.7",
        "id": "INBW12",
        "name": "Valuation error - trading securities",
        "description": "The fair value of securities held for trading and dealing purposes are:\n- not appropriately computed\n-not recorded"
    },
    {
        "processId": "GBP1.7",
        "id": "INBW13",
        "name": "Inappropriate access",
        "description": "An employee may have the ability to initiate, authorize, and record a transaction or may have custody of assets within the process, such that they are able both to perpetrate and conceal an error or irregularity"
    },
    {
        "processId": "GBP1.8",
        "id": "INBW1",
        "name": "Inappropriate customer",
        "description": "A customer is approved for services who:\n- is fraudulently approved\n- is not reputable or exposes the entity to regulatory sanction\n- is not credit worthy\n- presents market risk that exceed limits\n- is otherwise unsuitable"
    },
    {
        "processId": "GBP1.8",
        "id": "INBW13",
        "name": "Inappropriate access",
        "description": "An employee may have the ability to initiate, authorize, and record a transaction or may have custody of assets within the process, such that they are able both to perpetrate and conceal an error or irregularity"
    },
    {
        "processId": "GBP1.8",
        "id": "INBW14",
        "name": "Customer account data",
        "description": "Customer account and customer agreement data are entered onto the trust or custody system:\n- fraudulently,\n- on terms that expose the entity to unacceptable legal or fiduciary risks,\n- on terms that do not match the customer's or entity's understanding of the arrangement,\n- that are otherwise unsuitable."
    },
    {
        "processId": "GBP1.8",
        "id": "INBW15",
        "name": "Unauthorized customer transaction",
        "description": "A customer transaction is inappropriate because\n- the transaction does not match the customer's instructions \n- the transaction exceeds the officer's authority\n- it is completed with an inappropriate or unauthorized counterparty"
    },
    {
        "processId": "GBP1.8",
        "id": "INBW16",
        "name": "Asset transfer error",
        "description": "Asset transfers are:\n- not recorded\n- recorded to the wrong customer account\n- recorded in the incorrect amount\n- fraudulently diverted\n- inappropriately commingled with assets of the entity or other customers"
    },
    {
        "processId": "GBP1.8",
        "id": "INBW17",
        "name": "Transaction fee income accrual error",
        "description": "Transaction fee income is calculated incorrectly because:\n- fee rate data is not correctly entered into the trust / custody system\n- changes in customer assets from transactions or corporate actions is not correctly entered into the trust / custody system;\n- the value of assets held in trust is incorrectly computed"
    },
    {
        "processId": "GBP1.8",
        "id": "INBW18",
        "name": "Valuation of investments held in trust",
        "description": "There are errors in the valuation of trust assets caused by:\n- errors in the underlying data\n- inappropriate factors or assumptions\n- inaccurate computation"
    },
    {
        "processId": "GBP1.8",
        "id": "INBW19",
        "name": "Trust fee errors",
        "description": "Recurring trust / custody account maintenance fees are:\n- not appropriately withdrawn from customer accounts,\n- not booked,\n- recorded in the incorrect amount,\n- fraudulently misappropriated."
    },
    {
        "processId": "GBP1.8",
        "id": "INBW20",
        "name": "Trust / custody general ledger error",
        "description": "Entries in the general ledger and trust / custody system do not agree"
    },
    {
        "processId": "GBP3",
        "id": "GBDWCGW001",
        "name": "Customer deposit balances",
        "description": "Customer deposit balances may be misstated or deposit transactions may be recorded to the incorrect customer account."
    },
    {
        "processId": "GBP3",
        "id": "GBDWCGW002",
        "name": "Data entry of deposit account information",
        "description": "New or modified deposit account information is incorrectly input into the system."
    },
    {
        "processId": "GBP3",
        "id": "GBDWCGW003",
        "name": "System interface deposits sub-ledger/ general ledger",
        "description": "The deposit sub-ledger incorrectly interfaces with the general ledger."
    },
    {
        "processId": "GBP3",
        "id": "GBDWCGW004",
        "name": "Calculation and recording of interest expense and accruals",
        "description": "Interest expense and accruals may not be calculated or recorded correctly based on information in the system."
    },
    {
        "processId": "GBP3",
        "id": "GBDWCGW005",
        "name": "Approval and data entry of interest rates\n",
        "description": "Interest rates input into the system have not been properly approved or are not properly input into the system.\n"
    },
    {
        "processId": "GBP3",
        "id": "GBDWCGW006",
        "name": "Calculation and recording of service charge income",
        "description": "The service charge income is not calculated or recorded correctly."
    },
    {
        "processId": "GBP3",
        "id": "GBDWCGW007",
        "name": "Fee discounts and waivers",
        "description": "Fee discounts or waivers are given that are not properly authorized or not in accordance with the entity's policy."
    },
    {
        "processId": "GBP3",
        "id": "GBDWCGW008",
        "name": "Recording of deposit transactions",
        "description": "Deposit transactions (such as cash deposited or withdrawn by customers) are not recorded appropriately."
    },
    {
        "processId": "GBP3",
        "id": "GBIWCGW009",
        "name": "Inappropriate access - General Banking",
        "description": "An employee may have the ability to initiate, authorize and record a transaction or may have custody of assets within the process such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "GBP4",
        "id": "WCGW34",
        "name": "Incorrect data for payroll processing",
        "description": "Incorrect data is sent to the payroll processing company  / input into the payroll system"
    },
    {
        "processId": "GBP4",
        "id": "WCGW37",
        "name": "Payment recorded incorrectly",
        "description": "Payment is not recorded correctly."
    },
    {
        "processId": "GBP4",
        "id": "WCGW400",
        "name": "Inappropriate access - HR process",
        "description": "An employee may have the ability to initiate, authorize and record a transaction or may have custody of assets within the process, such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "GBP4",
        "id": "WCGW431",
        "name": "Employee benefits - present value of defined benefit obligations estimate errors",
        "description": "There are errors in the preparation of the estimate, caused by:\n• errors in the data inputs.\n• inappropriate assumptions.\n• not applying the requirements of the applicable financial reporting framework.\n• inaccurate computation."
    },
    {
        "processId": "GBP4",
        "id": "WCGW432",
        "name": "Employee benefits - fair value of plan assets estimate errors",
        "description": "There are errors in the preparation of the estimate, caused by:\n• errors in the data inputs.\n• inappropriate assumptions.\n• not applying the requirements of the applicable financial reporting framework.\n• inaccurate computation."
    },
    {
        "processId": "GBP4",
        "id": "WCGW725",
        "name": "Payroll data changes",
        "description": "Changes to the payroll data (including joiners, leavers, pay raises, and variable compensation arrangements) are not processed correctly as a result of inaccurate processing of changes."
    },
    {
        "processId": "GBP4",
        "id": "WCGW726",
        "name": "Processing error",
        "description": "Payroll data is processed incorrectly by the service organization or by the payroll system.  This includes the risk that the calculation of tax/ social security or other deductions is incorrect."
    },
    {
        "processId": "GBP4",
        "id": "WCGW404",
        "name": "Payment error",
        "description": "An incorrect payment is made, either to an employee or to the authorities."
    },
    {
        "processId": "GBP4",
        "id": "WCGW406",
        "name": "Payroll accrual error",
        "description": "Payroll expense accruals are improperly calculated."
    },
    {
        "processId": "GBP4",
        "id": "WCGW418",
        "name": "Personnel disclosure errors",
        "description": "There are errors in the preparation of the disclosure, caused by:\n• not applying the requirements of the applicable financial reporting framework.\n• errors in the data inputs.\n• inappropriate assumptions.\n• inaccurate computation.\n• inaccurate or inadequate descriptions."
    },
    {
        "processId": "GBP4",
        "id": "WCGW442",
        "name": "Share-based payment disclosure errors",
        "description": "There are errors in the preparation of the disclosure, caused by:\n• not applying the requirements of the applicable financial reporting framework.\n• errors in the data inputs.\n• inappropriate assumptions.\n• inaccurate computation.\n• inaccurate or inadequate descriptions."
    },
    {
        "processId": "GBP4",
        "id": "WCGW440",
        "name": "Share-based payment expense errors",
        "description": "Share-based payment expense is incorrectly stated, caused by:\n• failure to apply the entity's accounting policies\n• failure to identify compensation programs or grants"
    },
    {
        "processId": "GBP5",
        "id": "WCGW215",
        "name": "Cash payment fraud",
        "description": "Cash payments are fraudulently diverted"
    },
    {
        "processId": "GBP5",
        "id": "WCGW44",
        "name": "Cash balance error",
        "description": "The cash balance recorded by the entity is not properly stated."
    },
    {
        "processId": "GBP5",
        "id": "WCGW400",
        "name": "Inappropriate access - HR process",
        "description": "An employee may have the ability to initiate, authorize and record a transaction or may have custody of assets within the process, such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "GBP5",
        "id": "GBTWCGW001",
        "name": "Authorization and recording of borrowings",
        "description": "Borrowings from third party financial institutions are not properly authorized or recorded."
    },
    {
        "processId": "GBP5",
        "id": "GBTWCGW002",
        "name": "Calculation and recording of interest expense and accrued interest payable on borrowings",
        "description": "The interest expense and accrued interest payable on borrowings from third party financial institutions is improperly calculated or recorded in the general ledger."
    },
    {
        "processId": "GBP5",
        "id": "GBTWCGW003",
        "name": "Authorization and recording of repayments on borrowings",
        "description": "Repayments on borrowings from third party financial institutions are not properly authorized or recorded."
    },
    {
        "processId": "GBP5",
        "id": "GBTWCGW004",
        "name": "Authorization and recording of repurchase agreements",
        "description": "Repurchase agreements with third parties are not valid legally, properly authorized or recorded."
    },
    {
        "processId": "GBP5",
        "id": "GBTWCGW005",
        "name": "Transfer of ownership of securities in the repurchase agreement",
        "description": "The ownership of securities in the repurchase agreement does not properly transfer at the inception or end of the agreement between the entity and the third party.\n"
    },
    {
        "processId": "GBP5",
        "id": "GBTWCGW006",
        "name": "Calculation and recording of interest expense and accrued interest payable on repurchase agreements",
        "description": "The interest expense and accrued interest payable on repurchase agreements is improperly calculated or recorded in the general ledger."
    },
    {
        "processId": "GBP5",
        "id": "GBTWCGW007",
        "name": "Authorization and recording of repayments on repurchase agreements",
        "description": "Repayments on repurchase agreements are not properly authorized or recorded."
    },
    {
        "processId": "GBP5",
        "id": "GBTWCGW008",
        "name": "Authorization and recording of loans and advances",
        "description": "Loans and advances to third party financial institutions are not properly authorized or recorded."
    },
    {
        "processId": "GBP5",
        "id": "GBTWCGW009",
        "name": "Calculation and recording of interest income and accrued interest receivable on loans and advances",
        "description": "The interest income and accrued interest income on loans and advances to third party financial institutions are improperly calculated or recorded in the general ledger."
    },
    {
        "processId": "GBP5",
        "id": "GBTWCGW010",
        "name": "Authorization and recording of reverse repurchase agreements",
        "description": "Reverse repurchase agreements with third parties are not properly authorized or recorded."
    },
    {
        "processId": "GBP5",
        "id": "GBTWCGW011",
        "name": "Calculation and recording of interest income and accrued interest receivable on reverse repurchase agreements",
        "description": "The interest income and accrued interest receivable on reverse repurchase agreements are improperly calculated or recorded in the general ledger."
    },
    {
        "processId": "GBP5",
        "id": "GBTWCGW012",
        "name": "Cash balances and cash transactions",
        "description": "Cash balances or cash transactions (such as deposits, lending, borrowings from other financial institutions, repurchase agreements, loans and advances to other financial institutions, reverse repurchase agreements) are not properly recorded or accounted for. "
    },
    {
        "processId": "GBP5",
        "id": "GBTWCGW013",
        "name": "Clearing accounts with other financial institutions and central banks",
        "description": "The entries to clearing accounts with other financial institutions and central banks are improperly recorded or the wrong amount is requested from or by the third party financial institution or central bank."
    },
    {
        "processId": "GBP5",
        "id": "GBTWCGW014",
        "name": "Compliance with covenants",
        "description": "The entity does not maintain compliance with covenants by failing to identify breaches, or failing to reduce borrowing levels."
    },
    {
        "processId": "GBP5",
        "id": "GBTWCGW015",
        "name": "Error in applying fair value option",
        "description": "The fair value of debt issued by the entity carried at fair value is incorrectly estimated because of \n- inappropriate  assumptions\n- inaccurate computation"
    },
    {
        "processId": "GBP5",
        "id": "WCGW44.1",
        "name": "Cash payment error",
        "description": "Cash payments are not recorded or recorded for an incorrect amount."
    },
    {
        "processId": "GBP8",
        "id": "GBIWCGW001",
        "name": "Authorization and recording of investments",
        "description": "Investment transactions are not properly authorized, carried out or recorded."
    },
    {
        "processId": "GBP8",
        "id": "GBIWCGW002",
        "name": "Gains and losses from sales of investments",
        "description": "Gains and losses from sales of investments are not properly authorized, calculated and recorded."
    },
    {
        "processId": "GBP8",
        "id": "GBIWCGW003",
        "name": "Investment income",
        "description": "Investment income is not properly approved, calculated or recorded."
    },
    {
        "processId": "GBP8",
        "id": "GBIWCGW004",
        "name": "Amortization/ accretion and recording of premiums and discounts",
        "description": "Amortization/ accretion of premiums and discounts on securities is not calculated or recorded correctly."
    },
    {
        "processId": "GBP8",
        "id": "GBIWCGW005",
        "name": "Processing and recording of payments",
        "description": "Payments are not made/ received or not properly recorded.  Payments include the following:\n\n- purchase and sale of debt securities, equity securities and derivatives;\n- interest and dividend income;\n- gains and losses on debt securities, equity securities and derivatives."
    },
    {
        "processId": "GBP8",
        "id": "GBIWCGW006",
        "name": "Valuation of investments",
        "description": "Investments are incorrectly valued."
    },
    {
        "processId": "GBP8",
        "id": "GBIWCGW007",
        "name": "Authorization or recording of derivatives",
        "description": "Derivatives are not properly authorized or recorded."
    },
    {
        "processId": "GBP8",
        "id": "GBIWCGW008",
        "name": "Fair value estimate",
        "description": "There are errors in the preparation of the estimate, caused by:\n• errors in the data inputs.\n• inappropriate assumptions.\n• not applying the requirements of the applicable financial reporting framework.\n• inaccurate computation."
    },
    {
        "processId": "GBP8",
        "id": "GBIWCGW009",
        "name": "Inappropriate access - General Banking",
        "description": "An employee may have the ability to initiate, authorize and record a transaction or may have custody of assets within the process such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "GBP8",
        "id": "GBIWCGW010",
        "name": "Investment impairment analysis",
        "description": "Declines in the fair value of investments are not properly identified as impairment  through profit and loss as a result of failure to apply the entity's accounting policies."
    },
    {
        "processId": "GBP8",
        "id": "GBTWCGW015",
        "name": "Error in applying fair value option",
        "description": "The fair value of debt issued by the entity carried at fair value is incorrectly estimated because of \n- inappropriate  assumptions\n- inaccurate computation"
    },
    {
        "processId": "GBP8",
        "id": "GBWCGW021",
        "name": "Investment classification error",
        "description": "Equity or debt investment transactions are not appropriately classified in accordance with applicable financial reporting framework."
    },
    {
        "processId": "GBP7",
        "id": "GBDEWCGW01",
        "name": "Derivative transactions not authorized",
        "description": "Derivative transactions are not properly authorized."
    },
    {
        "processId": "GBP7",
        "id": "GBDEWCGW02",
        "name": "Failure to identify or record derivative transaction",
        "description": "Derivative transactions, including embedded derivatives, are not properly identified or recorded."
    },
    {
        "processId": "GBP7",
        "id": "GBDEWCGW03",
        "name": "Missing or inadequate hedge documentation",
        "description": "Hedge accounting is inappropriately applied because of missing or inadequate documentation."
    },
    {
        "processId": "GBP7",
        "id": "GBDEWCGW04",
        "name": "Ineffective  hedges",
        "description": "Hedge accounting is inappropriately applied because derivatives are ineffective at hedging the identified risks."
    },
    {
        "processId": "GBP7",
        "id": "GBDEWCGW05",
        "name": "Improper recording of discontinued hedge",
        "description": "Discontinued hedging relationships are not properly accounted for or recorded."
    },
    {
        "processId": "GBP7",
        "id": "GBDEWCGW06",
        "name": "Derivative accruals / prepayments are not properly calculated",
        "description": "Derivative accruals / prepayments are not properly calculated"
    },
    {
        "processId": "GBP7",
        "id": "GBDEWCGW07",
        "name": "Derivative fair value estimate",
        "description": "There are errors in the preparation of the estimate, caused by:\n• errors in the data inputs.\n• inappropriate assumptions.\n• not applying the requirements of the applicable financial reporting framework.\n• inaccurate computation."
    },
    {
        "processId": "GBP7",
        "id": "GBDEWCGW08",
        "name": "Derivative disclosure errors",
        "description": "There are errors in the preparation of disclosures about the use of derivatives caused by: errors in the underlying data;  inappropriate factors or  assumptions, not applying the entity's accounting policies,  inaccurate computation."
    },
    {
        "processId": "GBP7",
        "id": "GBDEWCGW09",
        "name": "Derivative payments not made/ received",
        "description": "Payments/ receipts under derivative instruments are not made/ received"
    },
    {
        "processId": "GBP7",
        "id": "GBDEWCGW10",
        "name": "Derivative payments not properly recorded",
        "description": "Payments/ receipts under derivative instruments are not properly recorded"
    },
    {
        "processId": "GBP7",
        "id": "GBDEWCGW11",
        "name": "Inappropriate access",
        "description": "An employee may have the ability to initiate, authorize, and record a transaction or may have custody of assets within the process, such that they are able both to perpetrate and conceal an error or irregularity"
    },
    {
        "processId": "BSP2",
        "id": "WCGW20",
        "name": "Incorrect invoice approval",
        "description": "Invoice approved for payment at incorrect price or at incorrect quantity of goods/ services received or before services received"
    },
    {
        "processId": "BSP2",
        "id": "WCGW21",
        "name": "Incorrect invoice recording",
        "description": "Invoice is not recorded or is recorded incorrectly"
    },
    {
        "processId": "BSP2",
        "id": "WCGW22",
        "name": "Purchases cut-off",
        "description": "Purchases made close to the period end are not recorded in the correct accounting period."
    },
    {
        "processId": "BSP2",
        "id": "WCGW217",
        "name": "Foreign payables",
        "description": "Trade payables denominated in a foreign currency are not valued at the appropriate exchange rate or the purchase or inventory is valued using an incorrect exchange rate"
    },
    {
        "processId": "BSP2",
        "id": "WCGW219",
        "name": "Accrued expenses errors",
        "description": "The identification, calculation and/or recording of accrued expenses as at the period end is incorrect or incomplete.,"
    },
    {
        "processId": "BSP2",
        "id": "WCGW400",
        "name": "Inappropriate access - HR process",
        "description": "An employee may have the ability to initiate, authorize and record a transaction or may have custody of assets within the process, such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "BSP2",
        "id": "WCGW201",
        "name": "Inappropriate acceptance of new suppliers or amendments to existing supplier data",
        "description": "Suppliers are entered into the system: \n - fraudulently\n - that are unable to supply goods or services at an appropriate price and quality\n - on terms and conditions that expose the entity to unacceptable legal risks\n - that are otherwise unsuitable"
    },
    {
        "processId": "BSP2",
        "id": "WCGW202",
        "name": "Errors in recording new and amended supplier data",
        "description": "New and amended supplier master data is not recorded and processed accurately to the master supplier database."
    },
    {
        "processId": "BSP2",
        "id": "WCGW204",
        "name": "Inappropriate purchase order",
        "description": "Purchase order is inappropriate because:\n- the purchase order does not match a valid requisition;\n- purchase is at the incorrect price; or\n- an inappropriate or unauthorized supplier is selected."
    },
    {
        "processId": "BSP2",
        "id": "WCGW205",
        "name": "Order entry error",
        "description": "An order is made but is not recorded in  the system (missing purchase orders) or is recorded in the system more than once (duplicate purchase orders)."
    },
    {
        "processId": "P5.8",
        "id": "WCGW584",
        "name": "Litigation, claims and assessments provision disclosure errors",
        "description": "There are errors in the preparation of the disclosure, caused by:\n• not applying the requirements of the applicable financial reporting framework.\n• errors in the data inputs.\n• inappropriate assumptions.\n• inaccurate computation.\n• inaccurate or inadequate descriptions."
    },
    {
        "processId": "P5.8",
        "id": "WCGW580",
        "name": "Provision disclosure errors",
        "description": "There are errors in the preparation of the disclosure, caused by:\n• not applying the requirements of the applicable financial reporting framework.\n• errors in the data inputs.\n• inappropriate assumptions.\n• inaccurate computation.\n• inaccurate or inadequate descriptions."
    },
    {
        "processId": "P5.8",
        "id": "WCGW560",
        "name": "Inappropriate access - general",
        "description": "An employee may have the ability to initiate authorize and record a transaction or may have custody of assets within the process such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "P5.8",
        "id": "WCGW583",
        "name": "Accuracy of litigation, claims and assessments recordings",
        "description": "Records of litigation, claims and assessments are not accurate and up to date or are not properly communicated to the financial reporting department"
    },
    {
        "processId": "P5.8",
        "id": "WCGW585",
        "name": "Litigation, claims and assessments provision estimate errors",
        "description": "There are errors in the preparation of the estimate, caused by:\n• errors in the data inputs.\n• inappropriate assumptions.\n• not applying the requirements of the applicable financial reporting framework.\n• inaccurate computation."
    },
    {
        "processId": "P5.8",
        "id": "WCGW581",
        "name": "Provision estimate errors",
        "description": "There are errors in the preparation of the estimate, caused by:\n• errors in the data inputs.\n• inappropriate assumptions.\n• not applying the requirements of the applicable financial reporting framework.\n• inaccurate computation."
    },
    {
        "processId": "P7",
        "id": "WCGW610",
        "name": "Incorrect useful life or residual value of PPE",
        "description": "The incorrect useful life or residual value is entered into the [system], which leads to errors in the calculation of depreciation expense and accumulated depreciation."
    },
    {
        "processId": "P7",
        "id": "WCGW615",
        "name": "Unauthorized PPE disposals",
        "description": "Property, plant and equipment disposals are unauthorized."
    },
    {
        "processId": "P7",
        "id": "WCGW616",
        "name": "PPE disposals not recorded properly",
        "description": "Property, plant and equipment disposal details (including the proceeds and the gain or loss arising) are incorrectly recorded"
    },
    {
        "processId": "P7",
        "id": "WCGW617",
        "name": "PPE disposal proceeds not received",
        "description": "Proceeds from property, plant and equipment disposals are not received"
    },
    {
        "processId": "P7",
        "id": "WCGW630",
        "name": "Lease classification",
        "description": "Lease agreements are improperly interpreted and accounted for incorrectly or improperly classified."
    },
    {
        "processId": "P7",
        "id": "WCGW631",
        "name": "Lease obligations error",
        "description": "Expired leases obligations and amortization are incorrectly recorded to the general ledger"
    },
    {
        "processId": "P7",
        "id": "WCGW632",
        "name": "Lease disclosure errors",
        "description": "There are errors in the preparation of the disclosure, caused by:\n• not applying the requirements of the applicable financial reporting framework.\n• errors in the data inputs.\n• inappropriate assumptions.\n• inaccurate computation.\n• inaccurate or inadequate descriptions."
    },
    {
        "processId": "P7",
        "id": "WCGW601",
        "name": "Errors in capitalization",
        "description": "Errors are made in the capitalization of property, plant and equipment, because: \n• inappropriate items are capitalized.\n• items are capitalized at an inappropriate amount.\n• additions are not recorded."
    },
    {
        "processId": "P7",
        "id": "WCGW611",
        "name": "Depreciation calculation error",
        "description": "Depreciation is not calculated in accordance with the details entered onto the system."
    },
    {
        "processId": "P7",
        "id": "WCGW607",
        "name": "PPE system/ general ledger error",
        "description": "Entries in the property, plant and equipment system and general ledger do not agree"
    },
    {
        "processId": "P7",
        "id": "WCGW600",
        "name": "Inappropriate access - PPE process",
        "description": "An employee may have the ability to initiate, authorize and record a transaction or may have custody of assets within the process, such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "P6",
        "id": "WCGW560",
        "name": "Inappropriate access - general",
        "description": "An employee may have the ability to initiate authorize and record a transaction or may have custody of assets within the process such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "P6",
        "id": "WCGW1002",
        "name": "Incorrect useful life or residual value of intangibles",
        "description": "The incorrect useful life or residual value is entered into the [system] [which leads to errors in the calculation of amortization expense and accumulated amortization]."
    },
    {
        "processId": "P6",
        "id": "WCGW711",
        "name": "Incorrect amortization expense",
        "description": "Amortization is not calculated in accordance with the accounting policy."
    },
    {
        "processId": "P6",
        "id": "WCGW1004",
        "name": "Impairment of goodwill and intangible assets estimate errors",
        "description": "There are errors in the preparation of the estimate, caused by:\n• errors in the data inputs.\n• inappropriate assumptions.\n• not applying the requirements of the applicable financial reporting framework.\n• inaccurate computation."
    },
    {
        "processId": "P6",
        "id": "WCGW1005",
        "name": "Intangible assets disclosure errors",
        "description": "There are errors in the preparation of the disclosure, caused by:\n• not applying the requirements of the applicable financial reporting framework.\n• errors in the data inputs.\n• inappropriate assumptions.\n• inaccurate computation.\n• inaccurate or inadequate descriptions."
    },
    {
        "processId": "P6",
        "id": "WCGW712",
        "name": "Fair value estimate",
        "description": "There are errors in the preparation of the fair value estimate for  intangible assets carried at valuation caused by:  \n- errors in the underlying data\n-  inappropriate factors or assumptions  \n- inaccurate computation."
    },
    {
        "processId": "P6",
        "id": "WCGW713",
        "name": "Disposals not recorded properly",
        "description": "Intangible asset disposal details (including the proceeds and the gain or loss arising) are incorrectly recorded"
    },
    {
        "processId": "P6",
        "id": "WCGW714",
        "name": "Disposal proceeds not received",
        "description": "Proceeds from intangible asset disposals are not received"
    },
    {
        "processId": "P6",
        "id": "WCGW731",
        "name": "Errors in accounting treatment for/ recording of business combinations",
        "description": "Business combinations are accounted for or recorded incorrectly"
    },
    {
        "processId": "P6",
        "id": "WCGW732",
        "name": "Fair value estimate errors in a business combination",
        "description": "There are errors in the preparation of the estimate caused by:\nerrors in the underlying data.\ninappropriate factors or assumptions.\ninaccurate computation."
    },
    {
        "processId": "P6",
        "id": "WCGW 733",
        "name": "Business combination disclosures",
        "description": "There are errors in the preparation of the disclosures due to:\ninappropriate factors or assumptions.\nnot addressing all requirements of IFRS 3.\nerrors in the underlying data."
    },
    {
        "processId": "P7.5",
        "id": "WCGW560",
        "name": "Inappropriate access - general",
        "description": "An employee may have the ability to initiate authorize and record a transaction or may have custody of assets within the process such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "P7.5",
        "id": "WCGW751",
        "name": "Identification of related party relationships",
        "description": "Not all related party relationships are properly identified."
    },
    {
        "processId": "P7.5",
        "id": "WCGW761",
        "name": "Identification of related party transactions and balances",
        "description": "Not all related party transactions and balances are properly identified, recorded and monitored."
    },
    {
        "processId": "P7.5",
        "id": "WCGW760",
        "name": "Related party disclosure errors",
        "description": "There are errors in the preparation of the disclosure, caused by:\n• not applying the requirements of the applicable financial reporting framework.\n• errors in the data inputs.\n• inappropriate assumptions.\n• inaccurate computation.\n• inaccurate or inadequate descriptions."
    },
    {
        "processId": "P8",
        "id": "WCGW400",
        "name": "Inappropriate access - HR process",
        "description": "An employee may have the ability to initiate, authorize and record a transaction or may have custody of assets within the process, such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "P8",
        "id": "WCGW500",
        "name": "Inappropriate access - treasury process",
        "description": "An employee may have the ability to initiate, authorize and record a transaction or may have custody of assets within the process, such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "P8",
        "id": "WCGW803",
        "name": "Tax ledger differences",
        "description": "Entries in the general ledger (including current and deferred, charges, balances and payments) do not agree to the authorized tax computations"
    },
    {
        "processId": "P8",
        "id": "WCGW805",
        "name": "Deferred tax asset allowance estimate errors",
        "description": "There are errors in the preparation of the estimate, caused by:\n• errors in the data inputs.\n• inappropriate assumptions.\n• not applying the requirements of the applicable financial reporting framework.\n• inaccurate computation."
    },
    {
        "processId": "P8",
        "id": "WCGW806",
        "name": "Taxation disclosure errors",
        "description": "There are errors in the preparation of the disclosure, caused by:\n• not applying the requirements of the applicable financial reporting framework.\n• errors in the data inputs.\n• inappropriate assumptions.\n• inaccurate computation.\n• inaccurate or inadequate descriptions."
    },
    {
        "processId": "P8",
        "id": "WCGW804",
        "name": "Tax uncertainty estimate errors",
        "description": "There are errors in the preparation of the estimate, caused by:\n• errors in the data inputs.\n• inappropriate assumptions.\n• not applying the requirements of the applicable financial reporting framework.\n• inaccurate computation."
    },
    {
        "processId": "P8",
        "id": "WCGW560",
        "name": "Inappropriate access - general",
        "description": "An employee may have the ability to initiate authorize and record a transaction or may have custody of assets within the process such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "P8",
        "id": "WCGW802",
        "name": "Tax return-to-provision errors",
        "description": "The tax provision is incorrectly recorded, caused by failure to record adjustments arising from the preparation of the tax return."
    },
    {
        "processId": "P13",
        "id": "WCGW200",
        "name": "Inappropriate access - purchases process",
        "description": "An employee may have the ability to initiate, authorize and record a transaction or may have custody of assets within the process, such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "P13",
        "id": "WCGW851",
        "name": "Stock transactions not recorded properly",
        "description": "Share and stock transactions (including equity,  non-equity, treasury stocks and the granting and issue of options and warrants) are not recorded or are recorded incorrectly in the general ledger"
    },
    {
        "processId": "P13",
        "id": "WCGW852",
        "name": "Cash from issue not received",
        "description": "Cash is not received from shares/ stocks or exercised options and warrants"
    },
    {
        "processId": "P13",
        "id": "WCGW853",
        "name": "Shareholders funds not recorded properly",
        "description": "Shareholders/ stockholders funds, including equity accounts are not accurately and/or appropriately recorded as at the period end."
    },
    {
        "processId": "P13",
        "id": "WCGW441",
        "name": "Share-based payments estimate errors",
        "description": "There are errors in the preparation of the estimate, caused by:\n• errors in the data inputs.\n• inappropriate assumptions.\n• not applying the requirements of the applicable financial reporting framework.\n• inaccurate computation."
    },
    {
        "processId": "P13",
        "id": "WCGW560",
        "name": "Inappropriate access - general",
        "description": "An employee may have the ability to initiate authorize and record a transaction or may have custody of assets within the process such that they are able both to perpetrate and conceal an error or irregularity."
    },
    {
        "processId": "P13",
        "id": "WCGW855",
        "name": "Dividend payments not recorded properly",
        "description": "Dividend payments are: \n• not booked.\n• recorded against the incorrect members account.\n• recorded in the incorrect amount.\n• fraudulently diverted."
    },
    {
        "processId": "P13",
        "id": "GBEQWCGW1",
        "name": "Errors in regulatory capital calculation",
        "description": "There are errors in the calculation of regulatory capital, capital adequacy, and related disclosures caused by: errors in the underlying data; inappropriate factors or  assumptions, not applying the entitys accounting policies, or inaccurate computation."
    },
    {
        "processId": "P13",
        "id": "GBEQWCGW2",
        "name": "Loans issued for share purchases not properly recorded",
        "description": "Shares issued in exchange for loans receivable are inappropriately included in shareholders' equity."
    },
    {
        "processId": "P13",
        "id": "GBEQWCGW3",
        "name": "Unexplained differences",
        "description": "Changes in equity accounts caused by changes in foreign exchange rates or other activity are not appropriately identified or recorded."
    },
    {
        "processId": "P13",
        "id": "WCGW854",
        "name": "Equity shares sold with loan proceeds error",
        "description": "Equity shares sold using the proceeds of loans originated by the entity are incorrectly recorded as a result of failure to apply the entity's accounting policies."
    },
    {
        "processId": "P13",
        "id": "WCGW440",
        "name": "Share-based payment expense errors",
        "description": "Share-based payment expense is incorrectly stated, caused by:\n• failure to apply the entity's accounting policies\n• failure to identify compensation programs or grants"
    },
    {
        "processId": "P13",
        "id": "WCGW861",
        "name": "Capital management disclosures",
        "description": "There are errors in the preparation of the capital disclosures caused by: \n• inappropriate factors or assumptions.\n• not addressing all the requirements of the relevant standard or legal and regulatory framework.\n• errors in the underlying data."
    }
];

export const controls = [
    {
        "riskId": "GBLWCGW001",
        "id": "GBCL003",
        "name": "Management review of customer complaints listing",
        "description": "Each period [the manager] reviews  the listing of customer complaints that have been generated and resolved since the previous review and how items have been resolved, as well as those complaints that remain outstanding.\n\nThe review considers the customer complaints that have been resolved during the period or remain outstanding as of the date of review. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBLWCGW001",
        "id": "GBCL007",
        "name": "Management review of post-closing checklist",
        "description": "Each period [the manager] reviews the loan post-closing checklist, noting if all required documents had been received from the customer prior to the loan being funded.\n\nThe review considers the loan post-closing checklist.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBLWCGW001",
        "id": "GBCL004",
        "name": "System configuration for customer statements",
        "description": "The [name of system] is configured in such a way as to [prevent/ ensure that] [details of procedure which is prevented/enforced]. \n\nThis is achieved by [details of how achieved]. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBLWCGW001",
        "id": "GBCL005",
        "name": "System configuration for lending limits",
        "description": "The loan sub-ledger is configured in such a way as to prevent loan officers from setting up loans in the loan subledger of amounts greater than their lending limits (as defined by the entity's internal policy or regulatory lending limits).\n\nThis is achieved by an authorized individual inputting the lending limits into the system and making only authorized changes to the lending limits in the system when approved by other individuals at the entity. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBLWCGW001",
        "id": "GBCL006",
        "name": "Approval of new loans",
        "description": "Objective: Underwriting and disbursements of loans are properly approved and recorded in accordance with the entity's policy and manual.\n\n[The reviewer] reviews loan documentation and approves the initiation of the loan. The review includes whether: \n• the information provided by the customer as required per policy is input correctly to the system; \n• the loan proposal/credit assessment, credit risk rating and credit check are performed in accordance with the entity’s policy; \n• the interest rate and loan limit is determined in accordance with the entity’s policy based on the score or rating of the customer;\n• collateral is provided to the bank as required by the entity’s policy, if necessary; and\n• Macro-economic forecasts: a monthly/quarterly review of the predefined economic factors is performed, to ensure that the factors are indicative of current circumstances and remain relevant to the portfolio.\n\n[Where differences or overrides of credit risk ratings occur, the appropriate authorization and supporting documentation for the judgement is obtained before finalizing the credit grade.]\n\n[The reviewer of credit assessments is not compensated based on volume of loans originated.]\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer indicates their approval by [document how approval of the item is indicated].]"
    },
    {
        "riskId": "GBLWCGW001",
        "id": "GBCL008",
        "name": "Preparation of reconciliation of loans receivable clearing and suspense accounts to GL",
        "description": "Each period, [a staff accountant] reconciles the [type of clearing and suspense account] clearing and suspense account to the general ledger.\n\nThis individual is independent of those processing [relevant process ] transactions. All differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written off with the appropriate entries posted to the general ledger;\n• marked as  to be reclassified in the financial statements for reporting purposes. \n\nAmounts to be followed up in the following period do not exceed [amount] individually or [amount] in the aggregate."
    },
    {
        "riskId": "GBLWCGW001",
        "id": "GBCL009",
        "name": "Review of reconciliation of loans receivable clearing and suspense accounts to GL",
        "description": "Each period the reconciliation of the loans receivable clearing and suspense account to the general ledger is reviewed by [name].\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBLWCGW001",
        "id": "GBCL010",
        "name": "Management review of new loan data input",
        "description": "Objective: The loan data is input into the system correctly and all required documentation is obtained.\n\nEach period [the reviewer] reviews the new loans input into the loan sub-ledger.  In order to perform the review, the reviewer performs the following procedures: \n• reviewing the information entered into the sub-ledger;\n• reviewing the classification code of the account for financial reporting purposes (e.g. commercial loans, personal loans and mortgages) and credit rating assigned; and\n• assessing whether all required loan documentation was obtained from the customer over the new loans based on the entity’s policy. \n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBLWCGW001",
        "id": "GBCL025",
        "name": "Management review of loan disbursement approval policies",
        "description": "Each period [the manager] reviews the loan disbursement and underwriting approval policies.\n\nThe review considers the entity's total exposure limits, lending authorities of each lending officer, and cash transfer limits for each loan operations officer.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n \nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBLWCGW001",
        "id": "GB160",
        "name": "Management review of loan disbursement approval policies",
        "description": "Each period [the manager] reviews the loan disbursement and underwriting approval policies.\n\nThe review considers the entity's total exposure limits, lending authorities of each lending officer, and cash transfer limits for each loan operations officer.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBLWCGW002",
        "id": "GBCL010",
        "name": "Management review of new loan data input",
        "description": "Objective: The loan data is input into the system correctly and all required documentation is obtained.\n\nEach period [the reviewer] reviews the new loans input into the loan sub-ledger.  In order to perform the review, the reviewer performs the following procedures: \n• reviewing the information entered into the sub-ledger;\n• reviewing the classification code of the account for financial reporting purposes (e.g. commercial loans, personal loans and mortgages) and credit rating assigned; and\n• assessing whether all required loan documentation was obtained from the customer over the new loans based on the entity’s policy. \n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBLWCGW003",
        "id": "GBCL012",
        "name": "Quality control review of loan file documentation",
        "description": "Each period [the manager] reviews a sample of loan files for compliance with the entity's and regulatory requirements, [such as collateral requirements, signatures on all required lending disclosures, signatures on loan documents, and other items as applicable for the loan type].\n\nThe review considers the sample of loans selected for quality review.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBLWCGW003",
        "id": "GBCL011",
        "name": "Security verification on loans",
        "description": "Each period [the manager] reviews the collateral/ security that has been provided as part of the loan.\n\nThe review considers the collateral/ security that has been provided as part of the loan.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBLWCGW004",
        "id": "GBCL013",
        "name": "System interface between loan sub-ledger and GL",
        "description": "The loan sub-ledger is configured in such a way as to automatically upload total loan information, including principal balances, accrued interest, deferred fees, customer escrows, and other information as applicable, to the general ledger during [nightly batch processing]. \n\nThis is achieved by mapping the individual loan sub-ledgers at each [branch location] to the corresponding general ledger accounts. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBLWCGW004",
        "id": "GBCL014",
        "name": "Sub-ledger to GL reconciliation preparation - loans (automated)",
        "description": "The loan sub-ledger is configured in such a way as to automatically generate a reconciliation between the loan sub-ledger and general ledger at intervals specified by the entity.  \n\nThis is achieved by the loan sub-ledger accounts being properly mapped to the applicable general ledger accounts and the system performing a comparison of the two amounts and generating a list of differences. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBLWCGW004",
        "id": "GBCL015",
        "name": "Sub-ledger to GL reconciliation preparation - loans (manual)",
        "description": "Each period, the loan sub-ledger is reconciled to the general ledger by [name] who is independent of those processing loan transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written off, following authorization by [the name].\n\nAmounts to be followed up in the following period do not exceed [amount] individually or [amount] in the aggregate. \n\nThis control determines whether the data in the general ledger matches the loan sub-ledger but does not provide any assurance over the data in the  loan sub-ledger."
    },
    {
        "riskId": "GBLWCGW004",
        "id": "GBCL016",
        "name": "Sub-ledger to GL reconciliation review - loans (manual)",
        "description": "Each period the reconciliation of the loan sub-ledger to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].] "
    },
    {
        "riskId": "GBLWCGW005",
        "id": "GBCI017",
        "name": "Management review of interest margin",
        "description": "Each period [the manager] reviews the following KPI(s): \n - interest margin calculation\n\nThe reviewer considers changes in the general interest rate environment; knowledge of interest rates paid and received from [investments, deposits, and loan products]; and comparisons to similar financial institutions. \n\nWhere [the reviewer] has further questions or wishes to understand reasons for the fluctuations in the KPIs, these are raised first with the appropriate manager, who provides more detailed information where applicable. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBLWCGW005",
        "id": "GBCI018",
        "name": "System configuration for calculation of average balances",
        "description": "The [system] is configured in such a way as to calculate average balances for use in financial reporting. \n\nThis is achieved by inputting the formulas into the [system] for calculation. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBLWCGW005",
        "id": "GBCL017",
        "name": "System configuration for interest income calculations",
        "description": "The loan system is configured in such a way as to calculate the amount of interest income to recognize based on the outstanding loan balances and interest rate entered into the system upon loan initiation.\n\nFor variable interest rate loans, the interest rate is updated in the system automatically and in accordance with the loan agreements. \n\nThis is achieved by loading the approved interest income rate tables into the system. Subsequently the system records a daily entry to interest income and accrued income until the loan account has reached a zero balance or has been closed. \n"
    },
    {
        "riskId": "GBLWCGW005",
        "id": "GBCL019",
        "name": "System configuration to not allow interest rates in excess of interest rate tables",
        "description": "The system is configured in such a way as to not allow interest rates to be applied to [loan and deposit products] in excess of the amounts in the rate tables loaded into the system.  \n\nThis is achieved by preparing rate tables and seeking approval from the proper level of management. After these have been input into the system and have been verified, individuals are not allowed to apply different interest rates without further authorization. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBLWCGW005",
        "id": "GBCL020",
        "name": "System configuration for allocation of receipts from customers",
        "description": "The loan sub-ledger is configured in such a way as to allocate payments received from customers on loan accounts to principal, interest, and customer escrow balances based on the customer's payment status and terms of the loan agreement. \n\nThis is achieved by correctly entering the terms of the loan agreement upon loan set-up and then the system will calculate the amount to record as reduction of principal, as interest income, and as an addition to the customer escrow balance based on the system-calculated allocation.  \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBLWCGW005",
        "id": "GBCL018",
        "name": "Approval of interest rate tables",
        "description": "[The reviewer] reviews each change to the interest rate tables used in the system for automatic calculation of interest income. \n\nThis involves reviewing the interest rates for each loan product and comparing to industry standard rates, market conditions and the entity's expected interest margin and assessing whether the interest rates to loan products appear reasonable.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer indicates their approval by [document how approval of the item is indicated].]"
    },
    {
        "riskId": "GBLWCGW005",
        "id": "GB176",
        "name": "System configuration - interest income calculations",
        "description": "The loan, cash, and investment ledger is configured in such a way as to calculate the amount of interest income to recognize based on the outstanding balances of interest earning assets and interest rate data entered into the system upon the issuance of the debt or borrowings.\n\nThis is achieved by loading the interest rate into the system. For variable rate assets, both the variable index and the reset date are input into the system. Subsequently the system will record a daily entry to interest expense and accrued interest expense until the debt or borrowing balance has been repaid.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBLWCGW006",
        "id": "GBCL021",
        "name": "System configuration for fee income calculations",
        "description": "The loan system is configured in such a way as to calculate the amount of fee income to defer upon the initiation of a new loan and to amortize the contract liabilities - loan fee income over the life of the loan. \n\nThis is achieved by loading the approved fee income rate tables into the system and subsequently the system will record the fee income, contract liabilities - loan fee income and amortization over the life of the loan."
    },
    {
        "riskId": "GBLWCGW006",
        "id": "GBCL022",
        "name": "Management review of budget to actual analysis",
        "description": "Each period [the manager] reviews the following KPI(s): \n• budget to actual analysis\n\nThe reviewer considers knowledge of events that occurred during the year that would have resulted in amounts outside of the budgeted or expected amounts. \n\nWhere [the reviewer] has further questions or wishes to understand reasons for the fluctuations in the KPIs, these are raised first with the appropriate manager, who provides more detailed information where applicable. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBLWCGW006",
        "id": "GBCM029",
        "name": "System configuration for calculation of securitisation fee income",
        "description": "The [servicing sub-ledger] is configured in such a way as to ensure that the mortgage servicing fee income on loans being serviced for third parties is accurately calculated and recorded to the general ledger.\n\nThis is achieved by the mortgage servicing sub-ledger correctly tracking the unpaid principal balance and servicing rate agreed upon between the entity and the third party.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBLWCGW007",
        "id": "C253",
        "name": "Review of bank reconciliation",
        "description": "Each period, the [name] reviews the bank reconciliation. \n\n[Once the review is complete and the queries raised have been dealt with to the reviewer's satisfaction, they document their authorization by [document how the reviewer indicates that the review is complete.]]"
    },
    {
        "riskId": "GBLWCGW007",
        "id": "C320",
        "name": "Preparation of bank reconciliation",
        "description": "A bank reconciliation is prepared each period by [name], who is independent of those responsible for processing cash transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written-off, following  approval by [name]."
    },
    {
        "riskId": "GBLWCGW007",
        "id": "GBCL003",
        "name": "Management review of customer complaints listing",
        "description": "Each period [the manager] reviews  the listing of customer complaints that have been generated and resolved since the previous review and how items have been resolved, as well as those complaints that remain outstanding.\n\nThe review considers the customer complaints that have been resolved during the period or remain outstanding as of the date of review. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBLWCGW007",
        "id": "GBCL004",
        "name": "System configuration for customer statements",
        "description": "The [name of system] is configured in such a way as to [prevent/ ensure that] [details of procedure which is prevented/enforced]. \n\nThis is achieved by [details of how achieved]. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBLWCGW007",
        "id": "GBCL020",
        "name": "System configuration for allocation of receipts from customers",
        "description": "The loan sub-ledger is configured in such a way as to allocate payments received from customers on loan accounts to principal, interest, and customer escrow balances based on the customer's payment status and terms of the loan agreement. \n\nThis is achieved by correctly entering the terms of the loan agreement upon loan set-up and then the system will calculate the amount to record as reduction of principal, as interest income, and as an addition to the customer escrow balance based on the system-calculated allocation.  \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBLWCGW008",
        "id": "GBCL024",
        "name": "Review of write-offs, delinquency and watch list loans",
        "description": "Each period [the reviewer] reviews write-offs, delinquency and watch-list loan reports.\n\nThis includes reviewing:\n• the report of past-due loans including loan aging and whether or not write-offs have occurred, by [analyzing the trend of delinquency ratio with comparison with other competitors or economic situation, reconciling with other underlying records, or investigating significant items in write-offs];\n• the report of loan portfolio charge-off activity for propriety and completeness, by [reconciling with other underlying records or investigating significant items in charge-off]; and\n• the report of watch-list loans, to examine whether they have significant changes during the period, by [analyzing the trend of watch-list loans or investigating significant items in watch-list].\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBLWCGW008",
        "id": "GBCL023",
        "name": "System configuration for aging of loans receivable",
        "description": "The loan system is configured in such a way as to report the correct allowance and provision.\n\n1) For retail loans, systems are configured to classify loan balance into appropriate delinquency buckets based on last payment received. This is achieved by the sub-ledger tracking payments as they are received and updating the aging of the loan accordingly. \n\n2) For commercial loans, systems are configured to assign appropriate loss factors such as PD (Probability of default) or LGD (Loss given default) based on the loan category and risk rating of each loan, and calculate correctly."
    },
    {
        "riskId": "GBLWCGW009",
        "id": "GBCL010",
        "name": "Management review of new loan data input",
        "description": "Objective: The loan data is input into the system correctly and all required documentation is obtained.\n\nEach period [the reviewer] reviews the new loans input into the loan sub-ledger.  In order to perform the review, the reviewer performs the following procedures: \n• reviewing the information entered into the sub-ledger;\n• reviewing the classification code of the account for financial reporting purposes (e.g. commercial loans, personal loans and mortgages) and credit rating assigned; and\n• assessing whether all required loan documentation was obtained from the customer over the new loans based on the entity’s policy. \n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBLWCGW009",
        "id": "GBCL013",
        "name": "System interface between loan sub-ledger and GL",
        "description": "The loan sub-ledger is configured in such a way as to automatically upload total loan information, including principal balances, accrued interest, deferred fees, customer escrows, and other information as applicable, to the general ledger during [nightly batch processing]. \n\nThis is achieved by mapping the individual loan sub-ledgers at each [branch location] to the corresponding general ledger accounts. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBLWCGW009",
        "id": "GBCL014",
        "name": "Sub-ledger to GL reconciliation preparation - loans (automated)",
        "description": "The loan sub-ledger is configured in such a way as to automatically generate a reconciliation between the loan sub-ledger and general ledger at intervals specified by the entity.  \n\nThis is achieved by the loan sub-ledger accounts being properly mapped to the applicable general ledger accounts and the system performing a comparison of the two amounts and generating a list of differences. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBLWCGW009",
        "id": "GBCL015",
        "name": "Sub-ledger to GL reconciliation preparation - loans (manual)",
        "description": "Each period, the loan sub-ledger is reconciled to the general ledger by [name] who is independent of those processing loan transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written off, following authorization by [the name].\n\nAmounts to be followed up in the following period do not exceed [amount] individually or [amount] in the aggregate. \n\nThis control determines whether the data in the general ledger matches the loan sub-ledger but does not provide any assurance over the data in the  loan sub-ledger."
    },
    {
        "riskId": "GBLWCGW009",
        "id": "GBCL016",
        "name": "Sub-ledger to GL reconciliation review - loans (manual)",
        "description": "Each period the reconciliation of the loan sub-ledger to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].] "
    },
    {
        "riskId": "GBIWCGW009",
        "id": "GBCI001",
        "name": "Segregation of duties in investments process",
        "description": "The system prevents inappropriate access to the investment subledger by segregating the following activities: \n\n - certain individuals have the ability to authorize investment purchases and sales.\n - certain individuals authorize and/or review investment transactions.\n - certain individuals disburse and receive funds for investment transactions.\n - certain individuals reconcile the investment subledger and general ledger.\n - certain individuals reconcile the investment subledger to the investment custodian statements.\n\nIndividuals cannot access any combination of above duties that is inappropriate.\n\nThe control operates continuously.\n\nManagement has designed this control to prevent intentional potential misstatements greater than [amount]."
    },
    {
        "riskId": "GBIWCGW009",
        "id": "GBCL001",
        "name": "Segregation of duties - lending process",
        "description": "The system prevents inappropriate access to the loan sub-ledger by segregating the following functions: \n\n - Certain individuals have the ability to initiate and approve loans in the loan subledger;\n - Certain individuals maintain access to loan documentation and collateral;\n - Certain individuals receive cash.\n - Certain individuals post cash receipts to loan accounts in the loan subledger.\n - Certain individuals reconcile the loan subledger and general ledger.  \n\nIndividuals cannot access any combination of above duties that is inappropriate.\n\nThe control operates continuously.\n\nManagement has designed this control to prevent intentional potential misstatements greater than [amount]."
    },
    {
        "riskId": "GBIWCGW009",
        "id": "GBCC001",
        "name": "Segregation of duties over calculation of allowance for loan losses",
        "description": "The system prevents inappropriate access to the loan sub-ledger, general ledger, and network folder where the allowance calculation is maintained by segregating the following functions: \n\n  - the [credit department] makes changes to loan ratings in the loan subledger but does not have access to perform the allowance calculation;\n  - the [lending department] does not have access to change the risk ratings or specific loan loss allowances assigned to certain loans; and\n  - the [accounting department], who prepares the allowance for loan loss calculation, does not have access to modify information in the loan subledger or risk ratings assigned by the [credit department]. \n\nIndividuals cannot access any combination  of above duties that is inappropriate.\n\nThe control operates continuously.\n\nManagement has designed this control to prevent intentional potential misstatements greater than [amount]."
    },
    {
        "riskId": "GBIWCGW009",
        "id": "GBCD001",
        "name": "Segregation of duties - deposits process",
        "description": "The system prevents inappropriate access to the deposit sub-ledger by segregating the following functions: \n\n - Certain individuals have the ability to create and modify accounts in the deposit subledger;\n - Certain individuals review input into the deposit subledger; \n - Certain individuals receive and disburse funds to customers;\n - The system is configured to post deposits and withdrawals of cash to customer accounts;\n - Certain individuals reconcile the deposit subledger and general ledger.\n\nIndividuals cannot access any combination of above duties that is inappropriate.\n\nThe control operates continuously.\n\nManagement has designed this control to prevent intentional potential misstatements greater than [amount]."
    },
    {
        "riskId": "GBIWCGW009",
        "id": "GBCI002",
        "name": "System access in investments process",
        "description": "The investment subledgeris configured in such a way as torestrict unauthorized users from adding, modifying or deleting data in the investment subledger. \n\nThis is achieved by the entity only granting investment subledger system access to appropriate individuals. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBIWCGW009",
        "id": "GBCL002",
        "name": "System access - lending process",
        "description": "The loan sub-ledger is configured in such a way as to restrict unauthorized users from adding, modifying or deleting data in the loan subledger.\n\nThis is achieved by the entity only granting loan sub-ledger system access to appropriate individuals. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBIWCGW009",
        "id": "GBCC002",
        "name": "System access for calculation of allowance for loan losses",
        "description": "The source data used in the calculation of the allowance for loan losses is configured in such a way as to restrict unauthorized users for modifying or deleting data in the source data, e.g. loan sub-ledger data and allowance calculation spreadsheets. \n\nThis is achieved by the entity only granting system access to the source data used in preparing the allowance for loan losses to appropriate individuals. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBIWCGW009",
        "id": "GBCD002",
        "name": "System access - deposits process",
        "description": "The deposit subledger is configured in such a way as to restrict unauthorized users from adding, modifying or deleting data in the deposit sub-ledger. \n\nThis is achieved by the entity only granting deposit sub-ledger system access to appropriate individuals.  \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBLWCGW010",
        "id": "",
        "name": "",
        "description": ""
    },
    {
        "riskId": "GBLWCGW011",
        "id": "",
        "name": "",
        "description": ""
    },
    {
        "riskId": "WCGW400",
        "id": "C340",
        "name": "Segregation of duties - purchases process",
        "description": "Management segregates the following activities: \n- supplier master data maintenance\n- requisition authorization\n- purchase order entry\n- purchase invoice entry\n- release supplier invoice\n- goods receipt on purchase order\n- material/ service master\n- service receipt entry\n- physical inventory adjustments\n- delivery process/ goods movement\n\n[Name] reviews each employee's responsibilities to ensure that they do not perform any inappropriate combination of these activities. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW400",
        "id": "C358",
        "name": "System access - purchases process",
        "description": "The purchases system is configured in such a way as to support the segregation of duties required in the process.\n\nThis is achieved by [details of how achieved]. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW400",
        "id": "C362",
        "name": "Segregation of duties - HR process",
        "description": "Management segregates the following activities: \n- authorization of new employee agreements.\n- ability to amend employee details/ add employees.\n- processing of the payroll.\n- authorization of electronic funds transfer payment/ cheque run.\n\n[Name] reviews each employee's responsibilities to ensure that they do not perform any inappropriate combination of these activities. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW400",
        "id": "C363",
        "name": "System access - HR process",
        "description": "The human resources system is configured in such a way as to support the segregation of duties required in the process.\n\nThis is achieved by [details of how achieved]. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW400",
        "id": "C402",
        "name": "Segregation of duties - treasury process",
        "description": "Management segregates the following activities: \n- cheque preparation\n- cheque signing\n- preparation of bank reconciliations\n- review of bank reconciliations\n- custody of cash receipts\n- posting of cash transactions to the general ledger\n- custody of blank cheques\n- debt authorization\n- [other activities]\n\n[Name] reviews each employee's responsibilities to ensure that they do not perform any inappropriate combination of these activities. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW400",
        "id": "GBCC025",
        "name": "Segregation of duties - calculation of loan loss provision",
        "description": "The system prevents inappropriate  access to the loan sub-ledger, general ledger, and network folder where the provision calculation is maintained by segregating the following  functions: \n- the [credit department] makes changes to loan ratings in the loan sub-ledger but does not have access to perform the provision calculation.\n- the [lending department] does not have access to change the risk ratings or specific loan loss provisions assigned to certain loans. \n- the [accounting department], who prepares the loan loss provision calculation, does not have access to modify information in the loan sub-ledger or risk ratings assigned by the [credit department].\n\nIndividuals cannot access any combination  of above duties that is inappropriate.\n\nManagement has designed this control to prevent intentional potential misstatements greater than [amount].\n"
    },
    {
        "riskId": "WCGW400",
        "id": "GBCC026",
        "name": "System access rights - loan loss provision",
        "description": "The source data used in the calculation of the loan loss provisions is configured in such a way as to restrict unauthorized users for modifying or deleting data in the source data, e.g. loan sub-ledger data and allowance calculation spreadsheets.\n\nThis is achieved by the entity only granting system access to the source data used in preparing the loan loss provisions to appropriate individuals.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount].\n"
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCL024",
        "name": "Review of write-offs, delinquency and watch list loans",
        "description": "Each period [the reviewer] reviews write-offs, delinquency and watch-list loan reports.\n\nThis includes reviewing:\n• the report of past-due loans including loan aging and whether or not write-offs have occurred, by [analyzing the trend of delinquency ratio with comparison with other competitors or economic situation, reconciling with other underlying records, or investigating significant items in write-offs];\n• the report of loan portfolio charge-off activity for propriety and completeness, by [reconciling with other underlying records or investigating significant items in charge-off]; and\n• the report of watch-list loans, to examine whether they have significant changes during the period, by [analyzing the trend of watch-list loans or investigating significant items in watch-list].\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCL023",
        "name": "System configuration for aging of loans receivable",
        "description": "The loan system is configured in such a way as to report the correct allowance and provision.\n\n1) For retail loans, systems are configured to classify loan balance into appropriate delinquency buckets based on last payment received. This is achieved by the sub-ledger tracking payments as they are received and updating the aging of the loan accordingly. \n\n2) For commercial loans, systems are configured to assign appropriate loss factors such as PD (Probability of default) or LGD (Loss given default) based on the loan category and risk rating of each loan, and calculate correctly."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC003",
        "name": "Preparation of reconciliation of loan balances in GL to allowance calculation",
        "description": "Each period [the preparer] reconciles the loan balances in the general ledger as of the date of the allowance calculation to the total loan amount used in the allowance calculation.\n\nThe preparer is independent of those updating the loan balances in the general ledger or preparing the allowance calculation."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC004",
        "name": "Approval of loan risk ratings",
        "description": "Each period [the reviewer] reviews the risk ratings assigned by the [loan initiation department].\n\nThis review includes: \n• reviewing and approving the risk ratings for new loans;\n• reviewing changes to the risk ratings for existing loans; and\n• reviewing the appropriateness of the risk ratings for existing loans on a sample basis.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer indicates their approval by [document how approval of the item is indicated].]\n"
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC005",
        "name": "Management review of changes to loan risk ratings on loans",
        "description": "Each period [the manager] reviews the list of loan risk rating changes prepared by the [credit review department].\n\nThe review considers the listing of loan risk rating changes to identify any indications of increased risk of default.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC009",
        "name": "Management review of loan re-aging report",
        "description": "Each period [the manager] reviews a system report of loans changed from non-accrual to accrual status within a specified period of time.\n\nThe review considers the loans changed from non-accrual to accrual status within a specified period of time.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC011",
        "name": "Review of loan expected credit loss factors used in models",
        "description": "Each period [the reviewer] reviews whether the loan expected credit loss factors are appropriately developed and used in the model.\n\nIn order to perform the review, the reviewer performs the following procedures:\n\n1) For retail loans, they determine whether key assumptions and data used in the development of the loan expected credit loss factors (i.e. employment rate, historical write-offs) are reasonable and appropriate by reviewing supporting documents. \n\n2) For commercial loans, they determine that each risk rating for loans has appropriate expected credit loss factors such as PD (Probability of default) or LGD (Loss given default) by reviewing supporting documents.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC012",
        "name": "Exception/ edit report review of past-due write-offs",
        "description": "Each period [the manager] reviews the listing of loans that are past-due but a write-off has not occurred. \n\nThe review considers the listing of loans that are past-due but a write-off has not occurred. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC013",
        "name": "Review of underlying collateral valuation",
        "description": "Each period [the reviewer] reviews the collateral that is being used to secure each loan for purposes of determining the adequacy of the allowance for loan losses.\n\nThis includes reviewing whether:\n• all the necessary documentation supporting existence and valuation has been obtained and recorded appropriately; \n• the value of collateral is recorded in the loan system correctly; and\n• changes in value are monitored and addressed in the allowance, where appropriate.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC014",
        "name": "Management review of specific reserve analyses",
        "description": "Each period [the manager] reviews the listing of loans with specific reserves.\n\nThe review considers the listing of loans with specific reserves. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC006\n",
        "name": "System configuration for placing delinquent loans on non-accrual",
        "description": "The loan sub-ledger is configured in such a way as to place loans on non-accrual status after a certain period of delinquency has been reached. \n\nThis is achieved by the system tracking loan aging and the amount of days that a particular loan is past due. After a certain number of days, the loan is automatically placed on non-accrual status. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC007",
        "name": "System configuration for changes from non-accrual to accrual status of loans",
        "description": "The loan sub-ledger is configured in such a way as to not allow loans previously placed on non-accrual status to be changed to accrual status without manual override.  \n\nThis is achieved by only allowing a limited number of users access to change loans on non-accrual status to accrual status.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC008\n",
        "name": "System configuration for loan re-aging report",
        "description": "The loan sub-ledger is configured in such a way as to generate a report of loans that have been changed from non-accrual to accrual status within a specified period of time.  \n\nThis is achieved by recording changes from accrual status of loans within the loan sub-ledger and generating a report of changes to accrual status within a specified period of time.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC010\n",
        "name": "System configuration for consumer loan write-offs",
        "description": "The loan sub-ledger is configured in such a way as to automatically write off consumer loans that have been delinquent for a contractually stated amount of time.  \n\nThis is achieved by tracking loan aging of consumer loans, and at a specified period of delinquency, the system is configured to automatically write off the loan balance. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC015",
        "name": "Review of loan loss allowance calculation",
        "description": "Each period [the reviewer] reviews the calculation of loan loss allowance which is developed by the [accounting department in conjunction with the credit department] based on risk ratings assigned to certain loans, aging of loans receivable, delinquent loans, the amount of loans in non-accrual status and macro-economic factors among other factors as applicable.\n\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC016",
        "name": "Management review of reserve for unfunded loan commitments calculation",
        "description": "Each period the [give details of the preparation of the allowance]. \n\nThe analysis is reviewed by [the name] in accordance with the internal requirements for allowances of this nature. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC021",
        "name": "Management approval of allowance policy and methodologies",
        "description": "[The name] reviews and authorizes each component of the allowance/ loan loss provision computation methodology. This involves reviewing the assumptions used for estimating losses for each type of loan, the data gathered for each type of loan, the analysis performed, and the input of third party data services and specialists used and assessing  whether [factors reviewed/ approved]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm their authorization by [document how authorized].]\n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC022",
        "name": "System configuration  loan restructuring flags",
        "description": "The loan sub-ledger is configured in such a way as to automatically identify loan restructurings that require assessment for significant increase in credit risk (SICR) indication or classification as troubled debt restructurings.\n\nThis is achieved by the system tracking the original loan terms, the original expected effective interest rate, and future cash flows. Once a loan is restructured, the system automatically computes the effect of the changes in the loan terms on the effective interest rate and cash flows, and identifies loans whose changes require additional analysis.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC023",
        "name": "System configuration  loan statistics",
        "description": "The loan sub-ledger is configured in such a way as to automatically track the following statistics used in the allowance for loan loss estimation methodology:\n-  geographic concentration\n- borrower type\n- industry concentration\n- [other statistics]\n\nThis is achieved by the use of required fields for each statistic that must be entered into the system at the time the loan is originated or modified.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount].\n"
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC024",
        "name": "Management review of charge-off activity",
        "description": "Each period [the manager] reviews the loan portfolio charge-off activity for propriety and completeness.\n\nThe review considers the recoverability analysis supporting the charge-off amount.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC027",
        "name": "Preparation of reconciliation of loan balances in GL to allowance calculation",
        "description": "Each period [the preparer] reconciles the loan balances in the general ledger as of the date of the allowance calculation to the total loan amount used in the allowance calculation.\n\nThe preparer is independent of those updating the loan balances in the general ledger or preparing the allowance calculation."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC028",
        "name": "Management review of specific provision analyses",
        "description": "Each period [the manager] reviews the listing of loans with specific reserves.\n\nThe review considers the listing of loans with specific reserves.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCC029",
        "name": "Management review of loan loss provision calculation",
        "description": "Each period the [accounting department, in conjunction with the credit department], develops loan loss provisions based on risk ratings assigned to certain loans, aging of loans receivable, delinquent loans, the amount of loans in non-accrual status, macro-economic factors, among other factors, as applicable.\n\nThe analysis is reviewed by [the name] in accordance with the internal requirements for allowances of this nature. \n\nThe review considers [list considerations].\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GB164",
        "name": "Management review of charge-off activity",
        "description": "Each [period], [the manager] reviews the loan portfolio charge-off activity for propriety and completeness.\n\nThe review considers the recoverability analysis  supporting the charge-off amount.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n \nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount].\n"
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GB163",
        "name": "System configuration for loan statistics",
        "description": "The loan sub-ledger is configured in such a way as to automatically track the following statistics used in the allowance for loan loss estimation methodology:\n-  geographic concentration\n- borrower type\n- industry concentration\n- [other statistics]\n\nThis is achieved by the use of required fields for each statistic that must be entered into the system at the time the loan is originated or modified.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GB162",
        "name": "System configuration for loan restructuring flags",
        "description": "The loan sub-ledger is configured in such a way as to automatically identify loan restructurings that require assessment for significant increase in credit risk (SICR) indication or classification as troubled debt restructurings.\n\nThis is achieved by the system tracking the original loan terms, the original expected effective interest rate, and future cash flows. Once a loan is restructured, the system automatically computes the effect of the changes in the loan terms on the effective interest rate and cash flows, and identifies loans whose changes require additional analysis.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GB161",
        "name": "Management authorization of allowance policy",
        "description": "[The name] reviews and authorizes each component of the allowance / loan loss provision computation methodology. This involves reviewing the assumptions used for estimating losses for each type of loan, the data gathered for each type of loan, the analysis performed, and the input of third party data services and specialists used and assessing  whether [factors  reviewed/ approved]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm their authorization by [document how authorized].]\n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCS001",
        "name": "Independent monitoring of credit review",
        "description": "Objective: Management credit reviews of risk ratings are monitored and reviewed by independent personnel.\n\nEach period personnel independent from [the credit review department] monitors the credit reviews performed by [the credit review department].\n\nThis includes: \n• sampling the loans by the risk rating and product; and\n• examining whether the credit review was performed appropriately in accordance with the entity’s policies.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]\n"
    },
    {
        "riskId": "GBCWCGW001",
        "id": "GBCS002",
        "name": "Independent review of loan allowance model",
        "description": "Objective: The methodology and model for estimating loan loss allowances appropriately reflects economic situations and forward-looking assumptions. \n\nEach period [the internal auditor/ independent reviewer] reviews the methodology and model for the estimate of the allowance for loan expected credit losses. \n\nThe reviewer considers whether:\n• the specification and design of the model for ECLs estimates are in line with accounting financial reporting requirements;\n• the methodology and model estimates loan losses appropriately with consideration of the current economic situation and forward-looking economic information, by [analyzing the trend or correlation between the loan loss allowance and economic indicators]; and\n• the actual loss amount was similar with the estimates calculated by the model, by [comparing the allowance with the actual loss in the period which the loan loss model covers]. \n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBCWCGW002",
        "id": "GBCC017",
        "name": "Disclosure review - allowance for loan losses and reserve for unfunded loan commitments",
        "description": "Management has policies and procedures to help reduce the potential risks over the preparation of the disclosure as follows: \n\n[document management’s policies and procedures in place over: \n• using qualified and experienced personnel, including management's experts;\n• consideration by appropriate levels of management of whether the accounting disclosures are consistent with the operational plans of the entity;\n• the completeness, accuracy and validity of the underlying data used in the preparation of the  disclosure. \n\nWhere the disclosure includes subjective elements, document management's policies and procedures in place  over: \n• review and approval of the relevant factors and the development of assumptions by higher levels of management;\n• the periodic review of the methods of developing the factors and assumptions;\n• a comparison of the disclosures made in prior periods with the actual results;]"
    },
    {
        "riskId": "GBCWCGW003",
        "id": "GBCC030",
        "name": "Management review of appraisals over foreclosed property",
        "description": "Each period [the manager] reviews the appraisals that were performed in the period to support the fair value of the other real estate owned in the general ledger.\n\nThe review considers the real estate appraisals on other real estate owned.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBCWCGW003",
        "id": "GBCC031",
        "name": "Management review of foreclosed property schedule",
        "description": "Each period [the manager] reviews the schedule of other real estate owned, which includes information [such as the description/ name of the property, date the entity possessed the property, the carrying amount, the fair value, the estimated costs to sell, and the gain or loss if the asset was disposed during the period]\n\nThe review considers the schedule of other real estate owned\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBCWCGW004",
        "id": "GBCC031",
        "name": "Management review of foreclosed property schedule",
        "description": "Each period [the manager] reviews the schedule of other real estate owned, which includes information [such as the description/ name of the property, date the entity possessed the property, the carrying amount, the fair value, the estimated costs to sell, and the gain or loss if the asset was disposed during the period]\n\nThe review considers the schedule of other real estate owned\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBCWCGW004",
        "id": "GBCC032",
        "name": "Preparation of reconciliation of foreclosed property schedule to GL",
        "description": "Each period, [name] reconciles the other real estate owned schedule to the general ledger.\n\nThis preparer is independent of those in the [credit or lending department], does not initiate other real estate owned transactions or post the related journal entries."
    },
    {
        "riskId": "GBCWCGW005",
        "id": "GBCL024",
        "name": "Review of write-offs, delinquency and watch list loans",
        "description": "Each period [the reviewer] reviews write-offs, delinquency and watch-list loan reports.\n\nThis includes reviewing:\n• the report of past-due loans including loan aging and whether or not write-offs have occurred, by [analyzing the trend of delinquency ratio with comparison with other competitors or economic situation, reconciling with other underlying records, or investigating significant items in write-offs];\n• the report of loan portfolio charge-off activity for propriety and completeness, by [reconciling with other underlying records or investigating significant items in charge-off]; and\n• the report of watch-list loans, to examine whether they have significant changes during the period, by [analyzing the trend of watch-list loans or investigating significant items in watch-list].\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBCWCGW005",
        "id": "GBCC004",
        "name": "Approval of loan risk ratings",
        "description": "Each period [the reviewer] reviews the risk ratings assigned by the [loan initiation department].\n\nThis review includes: \n• reviewing and approving the risk ratings for new loans;\n• reviewing changes to the risk ratings for existing loans; and\n• reviewing the appropriateness of the risk ratings for existing loans on a sample basis.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer indicates their approval by [document how approval of the item is indicated].]\n"
    },
    {
        "riskId": "GBCWCGW005",
        "id": "GBCS001",
        "name": "Independent monitoring of credit review",
        "description": "Objective: Management credit reviews of risk ratings are monitored and reviewed by independent personnel.\n\nEach period personnel independent from [the credit review department] monitors the credit reviews performed by [the credit review department].\n\nThis includes: \n• sampling the loans by the risk rating and product; and\n• examining whether the credit review was performed appropriately in accordance with the entity’s policies.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]\n"
    },
    {
        "riskId": "GBWCGW008",
        "id": "GBC001",
        "name": "Management review of proportionality framework",
        "description": "[The name] reviews and authorizes the proportionality framework for loan portfolio segmentation. This involves reviewing the risk factors taken into account when developing the proportionality framework and the analysis performed and assessing whether [factors reviewed/ approved, such as:\n• all relevant entity-level and portfolio level factors are taken into consideration;\n• the portfolio-level factors identified are relevant to the underlying loan portfolios;\n• the proportionality framework is appropriate to the underlying circumstances of the bank's loan portfolios.]\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm their authorization by [document how authorized].]\n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBWCGW008",
        "id": "GBC002",
        "name": "Approval of loan portfolio segmentation",
        "description": "[The reviewer] reviews the risk factors used in the loan portfolio segmentation. \n\nThis involves reviewing both the entity and portfolio level risk factors taken into account and assessing whether they are relevant to the underlying circumstances and all relevant risk factors have been considered.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer indicates their approval by [document how approval of the item is indicated].]\n"
    },
    {
        "riskId": "GBWCGW009",
        "id": "GBC005",
        "name": "Management review of significant increase in credit risk (SICR)",
        "description": "Each period [the manager] reviews the list of loans identified with significant increase in credit risk prepared by the [credit review department].\n\n[The manager] considers the credit reviews (e.g. loan risk ratings) and compares the list of loans identified with significant increase in credit risk with delinquency and watch-list loan summary and exception reporting arising from regular monitoring.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBWCGW010",
        "id": "GBC006",
        "name": "Management review of purchased or originated credit-impaired loans ",
        "description": "Each period [the manager] reviews the list of purchased or originated loans identified as credit-impaired prepared by the [credit review department].\n\n[The manager] considers the criteria for identification of credit-impaired loans and reviews exception report for loans that have become credit-impaired shortly after initial recognition to assess any unidentified POCI loans (due to either the policy not being properly implemented, or\nthe initial assessment of default not being properly performed).\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBWCGW011",
        "id": "GBC006",
        "name": "Management review of purchased or originated credit-impaired loans ",
        "description": "Each period [the manager] reviews the list of purchased or originated loans identified as credit-impaired prepared by the [credit review department].\n\n[The manager] considers the criteria for identification of credit-impaired loans and reviews exception report for loans that have become credit-impaired shortly after initial recognition to assess any unidentified POCI loans (due to either the policy not being properly implemented, or\nthe initial assessment of default not being properly performed).\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBWCGW012",
        "id": "GBCC015",
        "name": "Review of loan loss allowance calculation",
        "description": "Each period [the reviewer] reviews the calculation of loan loss allowance which is developed by the [accounting department in conjunction with the credit department] based on risk ratings assigned to certain loans, aging of loans receivable, delinquent loans, the amount of loans in non-accrual status and macro-economic factors among other factors as applicable.\n\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBWCGW013",
        "id": "GBCL024",
        "name": "Review of write-offs, delinquency and watch list loans",
        "description": "Each period [the reviewer] reviews write-offs, delinquency and watch-list loan reports.\n\nThis includes reviewing:\n• the report of past-due loans including loan aging and whether or not write-offs have occurred, by [analyzing the trend of delinquency ratio with comparison with other competitors or economic situation, reconciling with other underlying records, or investigating significant items in write-offs];\n• the report of loan portfolio charge-off activity for propriety and completeness, by [reconciling with other underlying records or investigating significant items in charge-off]; and\n• the report of watch-list loans, to examine whether they have significant changes during the period, by [analyzing the trend of watch-list loans or investigating significant items in watch-list].\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBWCGW013",
        "id": "GBCC012",
        "name": "Exception/ edit report review of past-due write-offs",
        "description": "Each period [the manager] reviews the listing of loans that are past-due but a write-off has not occurred. \n\nThe review considers the listing of loans that are past-due but a write-off has not occurred. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBWCGW013",
        "id": "GBCC010\n",
        "name": "System configuration for consumer loan write-offs",
        "description": "The loan sub-ledger is configured in such a way as to automatically write off consumer loans that have been delinquent for a contractually stated amount of time.  \n\nThis is achieved by tracking loan aging of consumer loans, and at a specified period of delinquency, the system is configured to automatically write off the loan balance. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBWCGW014",
        "id": "GBC007",
        "name": "Management review of forward-looking information  incorporation in estimation of loan ECLs",
        "description": "Each period [the manager] reviews the forward looking information used in estimation of expected credit losses for loans.\n\n[The manager] considers the individual risk ratings/individual credit reviews (e.g. for wholesale loans)  and assess whether forward-looking information is properly incorporated into individual risk ratings and is reflective of the underlying circumstances. \n\n[The manager] reviews the predefined macro-economic factors (e.g. for retail loan portfolios) linked to portfolios to ensure that they are indicative of actual circumstances and remain relevant to the portfolio.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount].\n"
    },
    {
        "riskId": "GBWCGW015",
        "id": "GBC005",
        "name": "Management review of significant increase in credit risk (SICR)",
        "description": "Each period [the manager] reviews the list of loans identified with significant increase in credit risk prepared by the [credit review department].\n\n[The manager] considers the credit reviews (e.g. loan risk ratings) and compares the list of loans identified with significant increase in credit risk with delinquency and watch-list loan summary and exception reporting arising from regular monitoring.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBWCGW016",
        "id": "GBC008",
        "name": "System configuration of loan modification",
        "description": "The loan system is configured in such a way as to flag loan modification transaction and track the modification details.\n\nThis is achieved by flagging modification if any loan information was changed in the system. The system will summarize a complete list of all modifications granted.\n[Add details of specific configuration]\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBWCGW017",
        "id": "GBC004",
        "name": "Approval of SICR criteria",
        "description": "[The reviewer] reviews the criteria for determining significant increase in credit risk which are used in the measurement of expected credit losses for loans and advances. \n\nThis involves reviewing the documents of significant increase in credit risk (SICR) criteria and assessing whether it aligns with the credit risk management processes and all relevant information including internal and external factors have been taken into account.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer indicates their approval by [document how approval of the item is indicated].]"
    },
    {
        "riskId": "GBWCGW018",
        "id": "GBCS002",
        "name": "Independent review of loan allowance model",
        "description": "Objective: The methodology and model for estimating loan loss allowances appropriately reflects economic situations and forward-looking assumptions. \n\nEach period [the internal auditor/ independent reviewer] reviews the methodology and model for the estimate of the allowance for loan expected credit losses. \n\nThe reviewer considers whether:\n• the specification and design of the model for ECLs estimates are in line with accounting financial reporting requirements;\n• the methodology and model estimates loan losses appropriately with consideration of the current economic situation and forward-looking economic information, by [analyzing the trend or correlation between the loan loss allowance and economic indicators]; and\n• the actual loss amount was similar with the estimates calculated by the model, by [comparing the allowance with the actual loss in the period which the loan loss model covers]. \n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBWCGW019",
        "id": "GBCC015",
        "name": "Review of loan loss allowance calculation",
        "description": "Each period [the reviewer] reviews the calculation of loan loss allowance which is developed by the [accounting department in conjunction with the credit department] based on risk ratings assigned to certain loans, aging of loans receivable, delinquent loans, the amount of loans in non-accrual status and macro-economic factors among other factors as applicable.\n\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBWCGW019",
        "id": "GBCC002",
        "name": "System access for calculation of allowance for loan losses",
        "description": "The source data used in the calculation of the allowance for loan losses is configured in such a way as to restrict unauthorized users for modifying or deleting data in the source data, e.g. loan sub-ledger data and allowance calculation spreadsheets. \n\nThis is achieved by the entity only granting system access to the source data used in preparing the allowance for loan losses to appropriate individuals. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBWCGW019",
        "id": "GBCC029",
        "name": "Management review of loan loss provision calculation",
        "description": "Each period the [accounting department, in conjunction with the credit department], develops loan loss provisions based on risk ratings assigned to certain loans, aging of loans receivable, delinquent loans, the amount of loans in non-accrual status, macro-economic factors, among other factors, as applicable.\n\nThe analysis is reviewed by [the name] in accordance with the internal requirements for allowances of this nature. \n\nThe review considers [list considerations].\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBWCGW019",
        "id": "GBCM033",
        "name": "Estimate preparation controls - impairments",
        "description": "( Estimate preparation controls )\n\nManagement has controls in place which address the points within the process at which a misstatement of the estimate could arise, as follows:\n\n[document the controls that management has over the preparation of the estimate, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used to develop the accounting estimate.\n• the review and approval of the assumptions and data inputs used in the development of the accounting estimate by the appropriate levels of management and, where appropriate, those charged with governance.\n• management's retrospective review of the outcome of accounting estimates made in prior periods.\n• consideration by appropriate levels of management of whether the accounting estimate is in accordance with the requirements of the applicable financial reporting framework. \n• the segregation of duties between those committing the entity to the underlying transactions and those responsible for making the accounting estimate.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]"
    },
    {
        "riskId": "GBWCGW020",
        "id": "GBC007",
        "name": "Management review of forward-looking information  incorporation in estimation of loan ECLs",
        "description": "Each period [the manager] reviews the forward looking information used in estimation of expected credit losses for loans.\n\n[The manager] considers the individual risk ratings/individual credit reviews (e.g. for wholesale loans)  and assess whether forward-looking information is properly incorporated into individual risk ratings and is reflective of the underlying circumstances. \n\n[The manager] reviews the predefined macro-economic factors (e.g. for retail loan portfolios) linked to portfolios to ensure that they are indicative of actual circumstances and remain relevant to the portfolio.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount].\n"
    },
    {
        "riskId": "GBWCGW002",
        "id": "GBC003",
        "name": "Approval of definition of default",
        "description": "[The reviewer] reviews the definition of default used in the measurement of expected credit losses for loans and advances. \n\nThis involves reviewing the accounting definition of default and assessing whether it complies with the financial reporting framework, and comparing the accounting definition of default with regulatory definition of default and assessing the  differences if any. \n[The differences between the two definitions should exist, and only exist, when there is specific credit behaviour in the portfolio that demonstrates that the accounting definition is more appropriate than the regulatory definition. When this is the case, management would review the analysis supporting the existence of this specific verifiable behaviour and assess whether it supports the difference.]\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer indicates their approval by [document how approval of the item is indicated].]\n"
    },
    {
        "riskId": "GBWCGW003",
        "id": "GBCC015",
        "name": "Review of loan loss allowance calculation",
        "description": "Each period [the reviewer] reviews the calculation of loan loss allowance which is developed by the [accounting department in conjunction with the credit department] based on risk ratings assigned to certain loans, aging of loans receivable, delinquent loans, the amount of loans in non-accrual status and macro-economic factors among other factors as applicable.\n\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBWCGW004",
        "id": "GBCC015",
        "name": "Review of loan loss allowance calculation",
        "description": "Each period [the reviewer] reviews the calculation of loan loss allowance which is developed by the [accounting department in conjunction with the credit department] based on risk ratings assigned to certain loans, aging of loans receivable, delinquent loans, the amount of loans in non-accrual status and macro-economic factors among other factors as applicable.\n\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBWCGW005",
        "id": "GBCC015",
        "name": "Review of loan loss allowance calculation",
        "description": "Each period [the reviewer] reviews the calculation of loan loss allowance which is developed by the [accounting department in conjunction with the credit department] based on risk ratings assigned to certain loans, aging of loans receivable, delinquent loans, the amount of loans in non-accrual status and macro-economic factors among other factors as applicable.\n\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBWCGW006",
        "id": "GBCC015",
        "name": "Review of loan loss allowance calculation",
        "description": "Each period [the reviewer] reviews the calculation of loan loss allowance which is developed by the [accounting department in conjunction with the credit department] based on risk ratings assigned to certain loans, aging of loans receivable, delinquent loans, the amount of loans in non-accrual status and macro-economic factors among other factors as applicable.\n\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBWCGW007",
        "id": "GBC004",
        "name": "Approval of SICR criteria",
        "description": "[The reviewer] reviews the criteria for determining significant increase in credit risk which are used in the measurement of expected credit losses for loans and advances. \n\nThis involves reviewing the documents of significant increase in credit risk (SICR) criteria and assessing whether it aligns with the credit risk management processes and all relevant information including internal and external factors have been taken into account.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer indicates their approval by [document how approval of the item is indicated].]"
    },
    {
        "riskId": "GBMWCGW001",
        "id": "GBCL013",
        "name": "System interface between loan sub-ledger and GL",
        "description": "The loan sub-ledger is configured in such a way as to automatically upload total loan information, including principal balances, accrued interest, deferred fees, customer escrows, and other information as applicable, to the general ledger during [nightly batch processing]. \n\nThis is achieved by mapping the individual loan sub-ledgers at each [branch location] to the corresponding general ledger accounts. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBMWCGW001",
        "id": "GBCL014",
        "name": "Sub-ledger to GL reconciliation preparation - loans (automated)",
        "description": "The loan sub-ledger is configured in such a way as to automatically generate a reconciliation between the loan sub-ledger and general ledger at intervals specified by the entity.  \n\nThis is achieved by the loan sub-ledger accounts being properly mapped to the applicable general ledger accounts and the system performing a comparison of the two amounts and generating a list of differences. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBMWCGW001",
        "id": "GBCL015",
        "name": "Sub-ledger to GL reconciliation preparation - loans (manual)",
        "description": "Each period, the loan sub-ledger is reconciled to the general ledger by [name] who is independent of those processing loan transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written off, following authorization by [the name].\n\nAmounts to be followed up in the following period do not exceed [amount] individually or [amount] in the aggregate. \n\nThis control determines whether the data in the general ledger matches the loan sub-ledger but does not provide any assurance over the data in the  loan sub-ledger."
    },
    {
        "riskId": "GBMWCGW001",
        "id": "GBCL016",
        "name": "Sub-ledger to GL reconciliation review - loans (manual)",
        "description": "Each period the reconciliation of the loan sub-ledger to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].] "
    },
    {
        "riskId": "GBMWCGW001",
        "id": "GBCM001",
        "name": "Management review of loans held for sale listing",
        "description": "Each period [the manager] reviews the listing of loans held for sale, which includes the loan account number, principal balance (cost), fair value, date removed from loans receivable, as well as any other pertinent details.  \n\nThe review considers the loans held for sale listing\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW001",
        "id": "GBCM002",
        "name": "Management review of legal agreements with third parties to which loans are sold",
        "description": "Each period [the manager] reviews the legal agreements in place with the entity and the third parties that purchase loans from the entity.  \n\nThe review considers the legal agreements in place with the entity and the third parties that purchase loans from the entity.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW001",
        "id": "GBCM003",
        "name": "Preparation of reconciliation of forward loan commitments and identified loans held for sale",
        "description": "Each period, [name] reconciles the listing of forward loan commitments to the loans held for sale that have been identified as committed to the third party.  \n\nThis preparer is independent of those originating loans or initiating transactions with the third parties "
    },
    {
        "riskId": "GBMWCGW001",
        "id": "GBCM004",
        "name": "Review of reconciliation of forward loan commitments and identified loans held for sale",
        "description": "Each period the reconciliation of the loans held for sale that have been identified as committed to the third party to the listing of forward loan commitments is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBMWCGW001",
        "id": "GBCM005",
        "name": "Management review of agreements to transfer financial assets",
        "description": "A report is produced each period which lists transferred financial assets and identifies whether they qualify for derecognition. \n\nThis is reviewed by [name] who reviews the items in the report, including any supporting information, and assesses whether the criteria for derecognition of the financial asset have been met.\n\nThe reviewer also confirms that the report is sequential to the previous report reviewed. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW001",
        "id": "GBCM006",
        "name": "KPI review - fallout percentages",
        "description": "Each period [the manager] reviews the following KPI(s): \n\n• the percentage of loans that do not transfer properly (\"fall out\") to the third party  \n\nThe reviewer considers the fallout percentages from previous periods, any correspondence with the third parties, and/or knowledge of any errors made while initiating the sale to the third party. \n\nWhere [the reviewer] has further questions or wishes to understand reasons for the fluctuations in the KPIs, these are raised first with the appropriate manager, who provides more detailed information where applicable. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW001",
        "id": "GB169",
        "name": "Sub-ledger to GL reconciliation review - sold loans",
        "description": "Each period the reconciliation of the ledger of loans sold and serviced on behalf of others to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nThis control determines whether the data in the general ledger matches the ledger of loans sold and serviced on behalf of others, but does not provide any assurance over the data in the ledger of loans sold and serviced on behalf of others."
    },
    {
        "riskId": "GBMWCGW001",
        "id": "GB168",
        "name": "Sub-ledger to GL reconciliation review - sold loans (manual)",
        "description": "Each period, the ledger of loans sold and serviced on behalf of others is reconciled to the general ledger by [name] who is independent of those processing [relevant process] transactions.\n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written off, following authorization by [the name].\n\nThis control determines whether the data in the general ledger matches the ledger of loans sold and serviced on behalf of others, but does not provide any assurance over the data in the ledger of loans sold and serviced on behalf of others"
    },
    {
        "riskId": "GBMWCGW002",
        "id": "GBCM001",
        "name": "Management review of loans held for sale listing",
        "description": "Each period [the manager] reviews the listing of loans held for sale, which includes the loan account number, principal balance (cost), fair value, date removed from loans receivable, as well as any other pertinent details.  \n\nThe review considers the loans held for sale listing\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW003",
        "id": "GBCM007",
        "name": "System configuration for pricing on forward loan commitments",
        "description": "The [system that prices forward loan commitments] is configured in such a way as to properly value forward loan commitments at fair value.  \n\nThis is achieved by entering the fair value of the commitment at the initiation of the forward loan commitment into the system, and then subsequent changes in fair value are tracked in the [system that prices forward loan commitments].  \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBMWCGW003",
        "id": "GBCM008",
        "name": "Management review of pricing on forward loan commitments",
        "description": "Each period [the manager] reviews the pricing report of forward loan commitments generated from the [system that prices forward loan commitments].  \n\nThe review considers the pricing report of forward loan commitments generated from the [system that prices forward loan commitments].\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW004",
        "id": "GBCM009",
        "name": "Management review of gain or loss on loan sale calculation",
        "description": "Each period [the manager] reviews the gain or loss calculation on loans sold to third parties.  \n\nThe review considers the gain or loss calculation on loans sold to third parties.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW004",
        "id": "GBCM010",
        "name": "Preparation of reconciliation of cash receipts on sale of loans to gain or loss calculation",
        "description": "Each period, [name] reconciles the  actual cash receipts, including [wire transfers/ cheque copies and sale documentation] on sales of loans held for sale to the amount of cash receipts in the gain/ loss calculation on sales of loans held for sale.  \n\nThis preparer is independent of those initiating sales of loans held for sale transactions or recording the resulting entries to the general ledger "
    },
    {
        "riskId": "GBMWCGW005",
        "id": "GBCM011",
        "name": "Management review of serviced loans input into servicing sub-ledger",
        "description": "Each period [the manager] reviews the loans that were input into the [servicing sub-ledger].\n\nThe review considers the appropriate principal balance, interest rate, and maturity date input into the [servicing sub-ledger].\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW006",
        "id": "GBCM012",
        "name": "Management review of capitalized mortgage servicing assets when loans are sold with servicing retained",
        "description": "Each period [the manager] reviews [the schedule] which includes [details of the schedule]. \n\nThe review considers the [items checked by review]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW006",
        "id": "GB206",
        "name": "Management review of assets recorded for cash flows retained ",
        "description": "Each period [the manager] reviews the inputs of loans sold with  retained cash flows into the fair value model, which is used to calculate the amount recorded.\n\nThe review considers the recorded asset calculation.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW007",
        "id": "GBCM013",
        "name": "System configuration for tracking serviced loans in servicing sub-ledger",
        "description": "The [servicing sub-ledger] is configured in such a way as to track the unpaid principal balance of loans that have been sold to third parties, but the entity has retained the servicing. \n\nThis is achieved by tracking any payments that are received by the entity on behalf of the loan accounts the entity is servicing.  \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBMWCGW008",
        "id": "GBCM014",
        "name": "Management review of MSR amortization expense and accumulated amortization",
        "description": "Each period [the manager] reviews the calculation of amortization expense and accumulated amortization.  \n\nThe review considers the amortization expense and accumulated amortization calculation.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW008",
        "id": "GBCM015",
        "name": "Management review of MSR roll-forward",
        "description": "Each period [the manager] reviews the mortgage servicing asset roll-forward, which includes the gross mortgage servicing asset, amount of accumulated amortization expense, and amortization expense for the period.  \n\nThe review considers the mortgage servicing rights roll-forward\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW008",
        "id": "GB167",
        "name": "System configuration for amortization expense and accumulated amortization of servicing assets",
        "description": "The [loan subsystem] is configured in such a way as to ensure that the calculation of amortization expense and accumulated amortization of servicing assets and other retained interests in securitized financial assets is accurate.\n\nThis is achieved by the use of pre-programmed amortization tables and calculation routines, edit checks, and interfacing with the loan payment system to validate prepayment rate assumptions.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBMWCGW009",
        "id": "GBCL022",
        "name": "Management review of budget to actual analysis",
        "description": "Each period [the manager] reviews the following KPI(s): \n• budget to actual analysis\n\nThe reviewer considers knowledge of events that occurred during the year that would have resulted in amounts outside of the budgeted or expected amounts. \n\nWhere [the reviewer] has further questions or wishes to understand reasons for the fluctuations in the KPIs, these are raised first with the appropriate manager, who provides more detailed information where applicable. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW009",
        "id": "GBCM016",
        "name": "System calculation for mortgage servicing fee income",
        "description": "The [servicing sub-ledger] is configured in such a way as to ensure that the mortgage servicing fee income on loans being serviced for third parties is accurately calculated and recorded to the general ledger.\n\nThis is achieved by the mortgage servicing subledger correctly tracking the unpaid principal balance and servicing rate agreed upon between the entity and the third party.  \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBMWCGW009",
        "id": "GBCM017",
        "name": "Preparation of reconciliation between mortgage servicing fee income recorded and amount received from third parties",
        "description": "Each period [name] reconciles the  amount of mortgage servicing fee income calculated by the [mortgage servicing sub-ledger] and recorded to the general ledger  to the amount received from the third parties for which the loans are serviced.  \n\nThis preparer is independent of those who maintain custody of cash, reconcile the bank statement, or initiate transactions with the third parties for which loans are serviced "
    },
    {
        "riskId": "GBMWCGW009",
        "id": "GBCM018",
        "name": "Management review of reconciliation between mortgage servicing fee income recorded and amount received from third parties",
        "description": "Each period the reconciliation of the  amount received from the third parties for which the loans are serviced to the amount of mortgage servicing fee income calculated by the [servicing sub-ledger] and recorded to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBMWCGW010",
        "id": "C253",
        "name": "Review of bank reconciliation",
        "description": "Each period, the [name] reviews the bank reconciliation. \n\n[Once the review is complete and the queries raised have been dealt with to the reviewer's satisfaction, they document their authorization by [document how the reviewer indicates that the review is complete.]]"
    },
    {
        "riskId": "GBMWCGW010",
        "id": "C320",
        "name": "Preparation of bank reconciliation",
        "description": "A bank reconciliation is prepared each period by [name], who is independent of those responsible for processing cash transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written-off, following  approval by [name]."
    },
    {
        "riskId": "GBMWCGW010",
        "id": "GBCM017",
        "name": "Preparation of reconciliation between mortgage servicing fee income recorded and amount received from third parties",
        "description": "Each period [name] reconciles the  amount of mortgage servicing fee income calculated by the [mortgage servicing sub-ledger] and recorded to the general ledger  to the amount received from the third parties for which the loans are serviced.  \n\nThis preparer is independent of those who maintain custody of cash, reconcile the bank statement, or initiate transactions with the third parties for which loans are serviced "
    },
    {
        "riskId": "GBMWCGW010",
        "id": "GBCM018",
        "name": "Management review of reconciliation between mortgage servicing fee income recorded and amount received from third parties",
        "description": "Each period the reconciliation of the  amount received from the third parties for which the loans are serviced to the amount of mortgage servicing fee income calculated by the [servicing sub-ledger] and recorded to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBMWCGW010",
        "id": "GBCM030",
        "name": "Preparation of bank/ vostro/ nostro reconciliation",
        "description": "A bank/ vostro/ nostro reconciliation is prepared periodically by [the name] who is independent of the person processing cash transactions.\n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written off, following approval by [the name].\n\nAmounts to be followed up in the following period do not exceed [amount] individually and [amount] in aggregate (gross)."
    },
    {
        "riskId": "GBMWCGW011",
        "id": "GBCM019",
        "name": "Reconciliation between unpaid principal balance in servicing system and amount used in the impairment calculation",
        "description": "Each period [name] reconciles the total unpaid principal balance of all loans serviced for third parties in the [servicing sub-ledger] to the amount of loans serviced for third parties used in the mortgage servicing asset impairment calculation.\n\nThis preparer is independent of those who initiate transactions with the third parties for which the entity services loans "
    },
    {
        "riskId": "GBMWCGW011",
        "id": "GBCM021",
        "name": "Management review of assumptions used in MSR model",
        "description": "The [board] reviews each assumption used in the mortgage servicing rights impairment analysis at the periodic board meeting. \n\nThe board is provided with supporting documentation, which has been reconciled to the [item to be reviewed].\n\nIf further review is deemed necessary, the board asks for clarification or additional information and any decisions are deferred until the next meeting. \n\nEvidence of the board's approval is indicated in the minutes. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW011",
        "id": "GBCM022",
        "name": "Management review of MSR impairment analysis",
        "description": "Each period the [give details of the preparation of the allowance]. \n\nThe analysis is reviewed by [whom/ which body] in accordance with the internal requirements for allowances of this nature. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW011",
        "id": "GBCM023",
        "name": "Estimate preparation controls - mortgage servicing assets impairment analysis",
        "description": "( Estimate preparation controls )\n\nManagement has controls in place which address the points within the process at which a misstatement of the estimate could arise, as follows:\n\n[document the controls that management has over the preparation of the estimate, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used to develop the accounting estimate.\n• the review and approval of the assumptions and data inputs used in the development of the accounting estimate by the appropriate levels of management and, where appropriate, those charged with governance.\n• management's retrospective review of the outcome of accounting estimates made in prior periods.\n• consideration by appropriate levels of management of whether the accounting estimate is in accordance with the requirements of the applicable financial reporting framework. \n• the segregation of duties between those committing the entity to the underlying transactions and those responsible for making the accounting estimate.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]"
    },
    {
        "riskId": "GBMWCGW011",
        "id": "GBCM020",
        "name": "Review of reconciliation between unpaid principal balance and amount used in the impairment calculation",
        "description": "Each period the reconciliation of the total unpaid principal balance of all loans serviced for third parties in the [servicing sub-ledger] to the amount of loans serviced for third parties used in the mortgage servicing asset impairment calculation is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBMWCGW011",
        "id": "GBCM031",
        "name": "Management review of assumptions used in fair value model",
        "description": "The [board] reviews each assumption used in the impairment analysis at the periodic board meeting. \n\nThe board is provided with supporting documentation, which has been reconciled to the [servicing sub-ledger and loan sub-ledger, as applicable].\n\nIf further review is deemed necessary, the board asks for clarification or additional information and any decisions are deferred until the next meeting. \n\nEvidence of the board's approval is indicated in the minutes. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW011",
        "id": "GBCM033",
        "name": "Estimate preparation controls - impairments",
        "description": "( Estimate preparation controls )\n\nManagement has controls in place which address the points within the process at which a misstatement of the estimate could arise, as follows:\n\n[document the controls that management has over the preparation of the estimate, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used to develop the accounting estimate.\n• the review and approval of the assumptions and data inputs used in the development of the accounting estimate by the appropriate levels of management and, where appropriate, those charged with governance.\n• management's retrospective review of the outcome of accounting estimates made in prior periods.\n• consideration by appropriate levels of management of whether the accounting estimate is in accordance with the requirements of the applicable financial reporting framework. \n• the segregation of duties between those committing the entity to the underlying transactions and those responsible for making the accounting estimate.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]"
    },
    {
        "riskId": "GBMWCGW011",
        "id": "GBCM032",
        "name": "Management review of fair value impairment analysis",
        "description": "Each period the [controller] reviews the impairment analysis, analyzing if it's based on the expected credit loss measurement. Additionally, the [controller] reviews the assumptions that have been used in developing the fair value, [such as prepayment speeds, weighted average interest rates, and other factors as applicable to the entity].\n\nThe analysis is reviewed by [whom/ which body] in accordance with the internal requirements for allowances of this nature. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBMWCGW012",
        "id": "GB166",
        "name": "Management review of accounting treatment for asset transfers",
        "description": "[The manager] reviews the accounting treatment of each transfer of financial assets, including participations, securitizations, and loan sales with recourse, or retained servicing.\n\nThis analysis involves reviewing the legal documentation, the terms of the transfer, the recourse provisions, extent of the entity's continuing involvement, and the risks and rewards retained by the entity and analysing the facts in light of the applicable accounting framework. \n\nWhere the facts match an existing scenario from the entity's accounting manual, the manager assesses whether the item is accounted for in accordance with this policy. Where the facts have not been anticipated by the existing accounting manual, the [manager] reviews the analysis of the particular circumstances and recommended accounting treatment. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to prevent potential unintentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBTWCGW015",
        "id": "GBCT026",
        "name": "Management review of fair value models  own debt and borrowings",
        "description": "Each period [the manager] reviews the fair value models used in determining prices for debt securities issued by the company without readily determinable market values\n\nThe review considers the fair value models\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW015",
        "id": "GBC459",
        "name": "Valuation committee approval of valuation policy and methodologies",
        "description": "[The name] reviews and authorizes each valuation policy established for each class of security held or traded by the entity. This involves reviewing the [methodologies for valuing each type of security, pricing services used, and valuation specialists used] and assessing whether [factors reviewed/ approved]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm their authorization by [document how authorized].]\n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW015",
        "id": "GB147",
        "name": "Management review of fair value models own debt and borrowings",
        "description": "Each period [the manager] reviews the fair value models used in determining prices for debt securities issued by the company without readily determinable market values\n\nThe review considers the fair value models.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW1",
        "id": "INBC1",
        "name": "Brokerage customer credit approval",
        "description": "[Reference/ financial information] is obtained for each potential new customer. \n\n[Name/ role] reviews all new customer information to determine if credit amounts are appropriate before offering the customer credit terms. \n\nThe approval procedures require different levels of authorization depending on the [proposed credit line] and [the risk score] of the customer. All proposals are considered by at least two members of staff. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is approved.]] \n\nThis control reduces the business risk of accepting an uncreditworthy customer. \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW1",
        "id": "INBC2",
        "name": "Approval of new customers/ clients",
        "description": "[The name] reviews and authorizes each customer/ client agreement or mandate. This involves reviewing the customer/ client's identification, the completed account application or agreement, and [other documentation] as required by policy, and assessing whether [factors reviewed/ approved]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW1",
        "id": "INBC34",
        "name": "Authorization of brokerage trading authority levels",
        "description": "[The name] reviews and authorizes each brokerage customer's requested trading authority. This involves reviewing the customer's account application, including investment objectives, account profile, applicable regulatory requirements and entity policies and assessing whether [factors reviewed/ approved]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW2",
        "id": "INBC117",
        "name": "Management review of new brokerage account information",
        "description": "[The name] reviews and authorizes each new brokerage customer's account information. This involves reviewing the customer name, terms of the customer agreement or mandate, margin account approval,  the completeness of the account application [and other items required by policy or regulation] and assessing whether [factors reviewed/ approved]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW2",
        "id": "INBC24",
        "name": "Customer/ client account data terms and fee schedule review",
        "description": "Each period [the manager] reviews customer account [fee schedule and billing service documents].\n\nThe review considers the [customer identification, account agreement terms, fee schedule, and billing terms].\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW2",
        "id": "INBC118",
        "name": "Approval of customer account changes",
        "description": "[The name] reviews and authorizes each change to customer account information. This involves reviewing the written requests received from the customer, the entity's policies, applicable regulatory requirements, and compliance requirements and assessing whether [factors reviewed/ approved]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, [the approver], [document how the approver indicates that the item is approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW3",
        "id": "INBC21",
        "name": "System configuration for permitted brokerage transactions",
        "description": "The trading system is configured in such a way as to prevent traders from entering into unauthorized transactions, transactions exceeding the customer's account balance plus available margin, transactions that differ from customer's instructions, or that exceed the trader's authority.\n\nThis is achieved by the use of passwords, authorization limits, and transaction limits linked to each trader profile.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount].\n"
    },
    {
        "riskId": "INBW3",
        "id": "INBC33",
        "name": "System configuration for trade instructions",
        "description": "The trading system is configured in such a way as to prevent the entry of incorrect account information, broker codes, position availability, and risk exposure limits.\n\nThis is achieved by the use of edit checks,  automated validation reports, and pre-programmed authorization limits.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount].\n"
    },
    {
        "riskId": "INBW3",
        "id": "INBC41",
        "name": "Exception/ edit report review - failed brokerage trades",
        "description": "An exception report is produced each period which details outstanding failed settlements of brokerage customer security trade activity and related cash activity.\n\nThis is reviewed by [name] who reviews the items in the report, and the reasons for their inclusion, including any supporting information.  \n\nThe reviewer also confirms that the report is sequential to the previous report reviewed. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW3",
        "id": "INBC49",
        "name": "Preparation of reconciliations of broker cash accounts",
        "description": "Each period [name] reconciles the cash segregated for customers account to the brokerage customer cash account activity report.\n\nThis preparer is independent of those who receive customer cash or accept customer trade orders.\n"
    },
    {
        "riskId": "INBW3",
        "id": "INBC50",
        "name": "Review of reconciliations of broker cash accounts",
        "description": "ach period the reconciliation of the cash segregated for customers account to the brokerage customer cash account activity report is reviewed by [name].\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, [document how the reviewer indicates that the review is complete.]] "
    },
    {
        "riskId": "INBW4",
        "id": "INBC41",
        "name": "Exception/ edit report review - failed brokerage trades",
        "description": "An exception report is produced each period which details outstanding failed settlements of brokerage customer security trade activity and related cash activity.\n\nThis is reviewed by [name] who reviews the items in the report, and the reasons for their inclusion, including any supporting information.  \n\nThe reviewer also confirms that the report is sequential to the previous report reviewed. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW4",
        "id": "INBC51",
        "name": "Approval of customer orders transmitted to clearing broker",
        "description": "When a customer trade to be processed by a clearing broker is entered into the system, it is automatically placed into a work queue for [a trading operations manager] to review.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approvers satisfaction, they [document how the approver indicates that the item is approved.]]\n\nManagement has designed this control to prevent potential misstatements both intentional and unintentional greater than [amount]."
    },
    {
        "riskId": "INBW4",
        "id": "INBC52",
        "name": "Preparation of reconciliation of broker accounts (where clearing broker used)",
        "description": "Each period [name] reconciles the cash and securities segregated for customers account to the report of cash and security transfers to clearing brokers.\n\nThis preparer is independent of those who receive customer cash or accept customer trade orders."
    },
    {
        "riskId": "INBW4",
        "id": "INBC53",
        "name": "Review of reconciliation of broker accounts (where clearing broker used)",
        "description": "Each period the reconciliation of the cash and securities segregated for customers account to the report of cash and security transfers to clearing brokers is reviewed by [name].\n \n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] "
    },
    {
        "riskId": "INBW5",
        "id": "INBC43",
        "name": "Deal allocation approval",
        "description": "When a single trade executed on behalf of multiple customers is entered into the system, it is automatically placed into a work  queue for a trade operations manager to review the allocation of the transaction to each customer account.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approvers satisfaction, they [document how the approver indicates that the item is approved.]]\n\nManagement has designed this control to prevent potential misstatements both intentional and unintentional greater than [amount]."
    },
    {
        "riskId": "INBW6",
        "id": "INBC41",
        "name": "Exception/ edit report review - failed brokerage trades",
        "description": "An exception report is produced each period which details outstanding failed settlements of brokerage customer security trade activity and related cash activity.\n\nThis is reviewed by [name] who reviews the items in the report, and the reasons for their inclusion, including any supporting information.  \n\nThe reviewer also confirms that the report is sequential to the previous report reviewed. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW6",
        "id": "INBC49",
        "name": "Preparation of reconciliations of broker cash accounts",
        "description": "Each period [name] reconciles the cash segregated for customers account to the brokerage customer cash account activity report.\n\nThis preparer is independent of those who receive customer cash or accept customer trade orders.\n"
    },
    {
        "riskId": "INBW6",
        "id": "INBC50",
        "name": "Review of reconciliations of broker cash accounts",
        "description": "ach period the reconciliation of the cash segregated for customers account to the brokerage customer cash account activity report is reviewed by [name].\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, [document how the reviewer indicates that the review is complete.]] "
    },
    {
        "riskId": "INBW6",
        "id": "INBC42",
        "name": "System configuration for limits on placement of unsettlable trades",
        "description": "The trading system is configured in such a way as to prevent the placement of a trade if there is insufficient cash or securities to settle a  requested trade.\n\nThis is achieved by comparing the settlement requirements with the securities, cash, or available margin in the customer account and programming a restriction on executing a trade that exceeds these limits.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount].\n"
    },
    {
        "riskId": "INBW6",
        "id": "INBC37",
        "name": "Preparation of reconciliation of daily transaction reports",
        "description": "Each period [name] reconciles the brokerage trading system activity reports to the summaries of trading activity [received from the source]\n\nThis preparer is independent of those [in the area of].\n"
    },
    {
        "riskId": "INBW6",
        "id": "INBC38",
        "name": "Review of reconciliation of daily transaction reports",
        "description": "Each period the reconciliation of the [document] to the [document] is reviewed by [name]. \n\nOnce the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction,  they [document how the reviewer indicates that the review is complete.]\n"
    },
    {
        "riskId": "INBW7",
        "id": "INBC3",
        "name": "Exception/ edit report review -  failed trades or unexecuted transactions",
        "description": "[The name] reviews and authorizes each customer/ client agreement or mandate. This involves reviewing the customer/ client's identification, the completed account application or agreement, and [other documentation] as required by policy, and assessing whether [factors reviewed/ approved]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW7",
        "id": "INBC49",
        "name": "Preparation of reconciliations of broker cash accounts",
        "description": "Each period [name] reconciles the cash segregated for customers account to the brokerage customer cash account activity report.\n\nThis preparer is independent of those who receive customer cash or accept customer trade orders.\n"
    },
    {
        "riskId": "INBW7",
        "id": "INBC50",
        "name": "Review of reconciliations of broker cash accounts",
        "description": "ach period the reconciliation of the cash segregated for customers account to the brokerage customer cash account activity report is reviewed by [name].\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, [document how the reviewer indicates that the review is complete.]] "
    },
    {
        "riskId": "INBW7",
        "id": "INBC42",
        "name": "System configuration for limits on placement of unsettlable trades",
        "description": "The trading system is configured in such a way as to prevent the placement of a trade if there is insufficient cash or securities to settle a  requested trade.\n\nThis is achieved by comparing the settlement requirements with the securities, cash, or available margin in the customer account and programming a restriction on executing a trade that exceeds these limits.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount].\n"
    },
    {
        "riskId": "INBW8",
        "id": "INBC68",
        "name": "System configuration for brokerage fees",
        "description": "The brokerage accounting system is configured in such a way as to automatically record transaction and account maintenance fee income based on the trades executed, types of transactions processed, and customer fee schedule.\n\nThis is achieved by edit checks, preselected system configuration options,  automated calculation routines, and automated interface with the general ledger.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount].\n"
    },
    {
        "riskId": "INBW9",
        "id": "INBC48",
        "name": "Management review of capital adequacy calculation report",
        "description": "Each period [the manager] reviews entity's trading volumes, net assets, and other components of the capital adequacy calculation.\n\nThe review considers the calculation of [regulatory/ exchange] capital adequacy.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW9",
        "id": "INBC44",
        "name": "Subledger to GL reconciliation preparation - brokerage",
        "description": "Each period the brokerage account sub-ledger is reconciled to the general ledger by [name] who is independent of those processing  [relevant process] transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized\n• marked as to be followed up during the following period\n• marked as to be written off, following authorization by [name].\n\nThis control determines whether the data in the general ledger matches the sub-ledger but does not provide any assurance over the data in the sub-ledger.\n"
    },
    {
        "riskId": "INBW9",
        "id": "INBC45",
        "name": "Subledger to GL reconciliation review - brokerage",
        "description": "Each period the reconciliation of the broker fee income accrual account schedule to the general ledger is reviewed by [name]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete].] "
    },
    {
        "riskId": "INBW10",
        "id": "INBC46",
        "name": "Preparation of reconciliation of broker dealer system to customer account ledger",
        "description": "Each period [name] reconciles the broker deal system to the customer account ledger.\n\nThis preparer is independent of those who input trades into the broker dealer system and customer transactions into the customer account ledger.\n"
    },
    {
        "riskId": "INBW10",
        "id": "INBC47",
        "name": "Review of reconciliation of broker dealer system to customer account ledger",
        "description": "Each period the reconciliation of the broker deal system to the customer account ledger is reviewed by [name]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] "
    },
    {
        "riskId": "INBW11",
        "id": "INBC44",
        "name": "Subledger to GL reconciliation preparation - brokerage",
        "description": "Each period the brokerage account sub-ledger is reconciled to the general ledger by [name] who is independent of those processing  [relevant process] transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized\n• marked as to be followed up during the following period\n• marked as to be written off, following authorization by [name].\n\nThis control determines whether the data in the general ledger matches the sub-ledger but does not provide any assurance over the data in the sub-ledger.\n"
    },
    {
        "riskId": "INBW11",
        "id": "INBC45",
        "name": "Subledger to GL reconciliation review - brokerage",
        "description": "Each period the reconciliation of the broker fee income accrual account schedule to the general ledger is reviewed by [name]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete].] "
    },
    {
        "riskId": "INBW12",
        "id": "INBC119",
        "name": "Valuation committee approval of valuation policy and methodologies",
        "description": "[The name] reviews and authorizes each [methodologies for valuing each type of security, pricing services used, and valuation specialists used]. This involves reviewing the valuation policy established for each class of security  held or traded by the entity and assessing whether [factors reviewed/ approved]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW12",
        "id": "INBC29",
        "name": "Preparation of reconciliation of security pricing master file report",
        "description": "Each period [name] reconciles the security pricing master-file report to the pricing reports received from independent pricing vendors.\n\nThis preparer is independent of those who execute trades or perform the valuation of security prices.\n"
    },
    {
        "riskId": "INBW12",
        "id": "INBC120",
        "name": "System configuration for significant price movement report",
        "description": "The [trading/ pricing system] is configured in such a way as to produce a report detailing significant price movements from the previous [period].\n\nThis is achieved by the use of price change thresholds programmed into the [trading/ pricing] system.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount].\n\n"
    },
    {
        "riskId": "INBW12",
        "id": "INBC121",
        "name": "Management review of significant price movement report",
        "description": "Each period [the manager] reviews securities identified by the report as having experienced price movements above the thresholds established by the entity for manual review.\n\nThe review considers [the significant price movement report].\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW12",
        "id": "INBC32",
        "name": "Exception/ edit report review - pricing",
        "description": "An exception report is produced each period which details pricing exceptions in the [pricing system/ sub-ledger] such as securities without a price, securities that were priced manually, securities with no price movements, securities where the age of pricing data exceeds a predetermined value or other exceptions].\n\nThis is reviewed by [name] who reviews the items in the report, and the reasons for their inclusion, including any supporting information.  \n\nThe reviewer also confirms that the report is sequential to the previous report reviewed. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW12",
        "id": "INBC122",
        "name": "Board  review of manually priced securities",
        "description": "The [Board] reviews each valuation of the manually priced securities at the [quarterly] Board meeting. \n\nThe Board is provided with supporting documentation, which has been reconciled to the manually priced security.\n\nIf further review is deemed necessary, the Board asks for clarification  or additional information and any decisions are deferred until the next meeting. \n\nEvidence of the Board's approval is indicated in the minutes. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW12",
        "id": "INBC123",
        "name": "Valuation committee review of hard to value securities valuation",
        "description": "Each period [the manager] reviews the valuation methodologies and inputs for securities that are [hard to value, illiquid, or restricted].\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW12",
        "id": "INBC124",
        "name": "Due diligence review of pricing vendors",
        "description": "Each period [the manager] reviews the processes used by pricing vendors in valuing securities, the expertise of the individuals, and [other factors]\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW12",
        "id": "INBC125",
        "name": "Management review of performance of internal valuation experts",
        "description": "Each period [the manager] reviews the performance of internal valuation experts.\n\nThe review considers the processes used by the internal valuation experts in valuing securities, the expertise of the individuals, errors identified in internal valuations, and [other factors]  \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW13",
        "id": "INBC21",
        "name": "System configuration for permitted brokerage transactions",
        "description": "The trading system is configured in such a way as to prevent traders from entering into unauthorized transactions, transactions exceeding the customer's account balance plus available margin, transactions that differ from customer's instructions, or that exceed the trader's authority.\n\nThis is achieved by the use of passwords, authorization limits, and transaction limits linked to each trader profile.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount].\n"
    },
    {
        "riskId": "INBW13",
        "id": "INBC35",
        "name": "Segregation of duties - brokerage (manual)",
        "description": "Management segregates the following activities:\n[list activities that are segregated]\n \n[Name] reviews each employee's responsibilities to ensure that they do not perform any inappropriate combination of these activities. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "INBW13",
        "id": "INBC36",
        "name": "Segregation of duties - brokerage (automated)",
        "description": "The system prevents inappropriate access to the trading system by segregating the following activities: \n- order acceptance and processing\n- trade execution\n- posting to customer accounts\n\nIndividuals cannot access any combination of above duties that is inappropriate.\n\nThe control operates continuously.\n\nManagement has designed this control to prevent intentional potential misstatements greater than [amount].\n"
    },
    {
        "riskId": "INBW13",
        "id": "INBC26",
        "name": "System configuration for permitted trust and custody transactions",
        "description": "The trust and custody management system is configured in such a way as to prevent trust operations personnel from entering into unauthorized transactions, including asset transfers, fee accruals, and adjustments to customer records.\n\nThis is achieved by the use of passwords, authorization limits, transaction limits linked to each manager profile, and edit checks on changes to customer account information.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "INBW13",
        "id": "INBC39",
        "name": "Segregation of duties -trust and custody (manual)",
        "description": "Management segregates the following activities: \n[list activities that are segregated]\n \n[Name] reviews each employee's responsibilities to ensure that they do not perform any inappropriate combination of these activities. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "INBW14",
        "id": "INBC24",
        "name": "Customer/ client account data terms and fee schedule review",
        "description": "Each period [the manager] reviews customer account [fee schedule and billing service documents].\n\nThe review considers the [customer identification, account agreement terms, fee schedule, and billing terms].\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW15",
        "id": "INBC26",
        "name": "System configuration for permitted trust and custody transactions",
        "description": "The trust and custody management system is configured in such a way as to prevent trust operations personnel from entering into unauthorized transactions, including asset transfers, fee accruals, and adjustments to customer records.\n\nThis is achieved by the use of passwords, authorization limits, transaction limits linked to each manager profile, and edit checks on changes to customer account information.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "INBW15",
        "id": "INBC108",
        "name": "System configuration for trust and custody transactions",
        "description": "The trust and custody management system is configured in such a way as to prevent the entry of incorrect trust and custody account information, broker codes, position availability, and customer/ client risk exposure limits.\n\nThis is achieved by the use of edit checks,  automated validation reports, and pre-programmed authorization limits.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount].\n\n"
    },
    {
        "riskId": "INBW16",
        "id": "INBC3",
        "name": "Exception/ edit report review -  failed trades or unexecuted transactions",
        "description": "[The name] reviews and authorizes each customer/ client agreement or mandate. This involves reviewing the customer/ client's identification, the completed account application or agreement, and [other documentation] as required by policy, and assessing whether [factors reviewed/ approved]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW16",
        "id": "INBC22",
        "name": "Preparation of reconciliation of trust and custody sub-ledger to customer transactions report",
        "description": "Each period [name] reconciles the trust and custody sub-ledger to the customer account records and transaction detail report.\n\nThis preparer is independent of those who input customer transactions into the trust and custody system.\n\n"
    },
    {
        "riskId": "INBW16",
        "id": "INBC113",
        "name": "Review of reconciliation of trust and custody subledger to customer transactions ",
        "description": "Each period the reconciliation of the trust and custody sub-ledger to the customer account records and transaction detail report is reviewed by [name].\n \n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] "
    },
    {
        "riskId": "INBW16",
        "id": "INBC6",
        "name": "Preparation of reconciliation of cash accounts",
        "description": "Each period [name] reconciles the cash account balances to the cash activity and balance reports received from the [bank or custodian], and investigates any differences identified.\n\nThis preparer is independent of those who execute cash [transactions or transfers].\n"
    },
    {
        "riskId": "INBW16",
        "id": "INBC112",
        "name": "Review of reconciliation of cash accounts",
        "description": "Each period the reconciliation of the cash account balances to the cash activity and balance reports received from the [bank or custodian] is reviewed by [name]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] "
    },
    {
        "riskId": "INBW16",
        "id": "INBC23",
        "name": "Trust and custody inventory",
        "description": "Once a [period] [name] carries out a physical inspection of assets, securities, and documents held in trust or custody for others.\n\nThis inspection is carried out by people other than those who have custody of the assets, maintain the fixed asset register or have custody of documents of title.\n\nThe inspection entails determining the existence of assets, assessing whether they are in good condition and still in use.\n\nThe inspectors raise queries with the [relevant head of department] when:\n- an asset,  security , or document cannot be found.\n- an asset,  security , or document  appears to be invalid or expired.\n- an asset,  security , or document is found that is not on the register.\n\nAdjustments required to the trust and custody ledger are proposed by the inspection team.  They are reviewed by [name] and are posted by [name].\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount].\n\n"
    },
    {
        "riskId": "INBW17",
        "id": "INBC25",
        "name": "System configuration for trust fees",
        "description": "The trust and custody accounting system is configured in such a way as to automatically accrue trust and custody fee income based on the account assets, types of transactions processed, and customer fee schedule\n\nThis is achieved by edit checks, preselected system configuration options, and automated calculation routines.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount].\n"
    },
    {
        "riskId": "INBW17",
        "id": "INBC109",
        "name": "Management review of other income",
        "description": "Each period [the manager] reviews a summary of other income activity.\n\nThe review considers the income accrued during the [period] as compared to the fee rate data entered into the [system], significant or unusual fluctuations in income, significant or unusual items recorded in other income.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW18",
        "id": "INBC29",
        "name": "Preparation of reconciliation of security pricing master file report",
        "description": "Each period [name] reconciles the security pricing master-file report to the pricing reports received from independent pricing vendors.\n\nThis preparer is independent of those who execute trades or perform the valuation of security prices.\n"
    },
    {
        "riskId": "INBW18",
        "id": "INBC32",
        "name": "Exception/ edit report review - pricing",
        "description": "An exception report is produced each period which details pricing exceptions in the [pricing system/ sub-ledger] such as securities without a price, securities that were priced manually, securities with no price movements, securities where the age of pricing data exceeds a predetermined value or other exceptions].\n\nThis is reviewed by [name] who reviews the items in the report, and the reasons for their inclusion, including any supporting information.  \n\nThe reviewer also confirms that the report is sequential to the previous report reviewed. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW18",
        "id": "INBC124",
        "name": "Due diligence review of pricing vendors",
        "description": "Each period [the manager] reviews the processes used by pricing vendors in valuing securities, the expertise of the individuals, and [other factors]\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW19",
        "id": "INBC25",
        "name": "System configuration for trust fees",
        "description": "The trust and custody accounting system is configured in such a way as to automatically accrue trust and custody fee income based on the account assets, types of transactions processed, and customer fee schedule\n\nThis is achieved by edit checks, preselected system configuration options, and automated calculation routines.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount].\n"
    },
    {
        "riskId": "INBW19",
        "id": "INBC109",
        "name": "Management review of other income",
        "description": "Each period [the manager] reviews a summary of other income activity.\n\nThe review considers the income accrued during the [period] as compared to the fee rate data entered into the [system], significant or unusual fluctuations in income, significant or unusual items recorded in other income.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW19",
        "id": "INBC27",
        "name": "Management review of initial invoices",
        "description": "Each period [the manager] reviews initial invoice before it is sent to a new customer.\n\nThe review considers the billing amounts, customer information, and payment terms.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW19",
        "id": "INBC28",
        "name": "Management review of manual invoices",
        "description": "Each period [the manager] reviews a schedule of accounts for all manual invoices.\n\nThe review considers the generation of manual invoices, documentation of the reason for a manual invoice, and accuracy of invoice information.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "INBW20",
        "id": "INBC30",
        "name": "Subledger to GL reconciliation preparation - trust and custody",
        "description": "Each period the trust and custody sub-ledger is reconciled to the general ledger by [name] who is independent of those processing [relevant process] transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized\n• marked as to be followed up during the following period\n• marked as to be written off, following authorization by [name].\n\nThis control determines whether the data in the general ledger matches the sub-ledger but does not provide any assurance over the data in the trust and custody accounts receivable, income accrual, and fee income accrual account schedule.\n"
    },
    {
        "riskId": "INBW20",
        "id": "INBC31",
        "name": "Subledger to GL reconciliation review - trust and custody",
        "description": "Each period the reconciliation of the [sub-ledger] to the general ledger is reviewed by [name]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete].] "
    },
    {
        "riskId": "GBDWCGW001",
        "id": "GBCL003",
        "name": "Management review of customer complaints listing",
        "description": "Each period [the manager] reviews  the listing of customer complaints that have been generated and resolved since the previous review and how items have been resolved, as well as those complaints that remain outstanding.\n\nThe review considers the customer complaints that have been resolved during the period or remain outstanding as of the date of review. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDWCGW001",
        "id": "GBCL004",
        "name": "System configuration for customer statements",
        "description": "The [name of system] is configured in such a way as to [prevent/ ensure that] [details of procedure which is prevented/enforced]. \n\nThis is achieved by [details of how achieved]. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBDWCGW001",
        "id": "GBCD003",
        "name": "System configuration for large deposit transactions report",
        "description": "The deposit sub-ledger is configured in such a way as to generate a report of deposit transactions that occurred during the [period] over a certain amount.  \n\nThis is achieved by the entity configuring the sub-ledger to generate this report based on the monetary amount they would like to monitor for further review. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBDWCGW001",
        "id": "GBCD004",
        "name": "Management review of large deposit transactions report",
        "description": "Each period [the manager] reviews the large deposit transactions report.  \n\nThe review considers the large deposit transactions report.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDWCGW002",
        "id": "GBCD005",
        "name": "System configuration for deposit account opening limit",
        "description": "The deposit sub-ledger is configured in such a way as to provide authority limits to specific individuals in opening new deposit accounts. \n\nThis is achieved by inputting authority limits into the deposit sub-ledger and providing a warning screen to individuals that try to open deposit accounts in excess of their authority limits. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBDWCGW002",
        "id": "GBCD006",
        "name": "System configuration for new deposit accounts report",
        "description": "The deposit sub-ledger is configured in such a way as to generate a listing of new deposit accounts that were opened [the previous day].\n\nThis is achieved by configuring the system to generate a report of new deposit accounts opened [the previous day]. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBDWCGW002",
        "id": "GBCD009",
        "name": "System configuration for dormant accounts report",
        "description": "The deposit sub-ledger is configured in such a way as to generate a dormant account report, listing all deposit accounts without transactions [for a specified period of time] and those that have been re-activated during that period. \n\nThis is achieved by configuring the deposit sub-ledger to track the date of deposit transactions and generate a report listing deposit accounts where there has been no activity [for a specified period of time] or where they have been reactivated during that period.  \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBDWCGW002",
        "id": "GBCD007",
        "name": "Management review of new deposit accounts report",
        "description": "Each period [the manager] reviews the system report of new deposit accounts opened [the previous day].\n\nThe review considers the signature cards and account information obtained from the customer, comparing this information to the information recorded in the deposit sub-ledger.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDWCGW002",
        "id": "GBCD008",
        "name": "Management review of brokered CDs input",
        "description": "Each period [the manager] reviews the brokered certificate of deposit (CD) account information for new brokered CDs.\n\nThe review considers the brokered CD input into the deposit sub-ledger.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDWCGW002",
        "id": "GBCD010",
        "name": "Management review of dormant accounts report",
        "description": "Each period [the manager] reviews [the schedule] which includes [details of the schedule]. \n\nThe review considers the [items checked by review]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDWCGW003",
        "id": "GBCD011",
        "name": "System interface between deposit sub-ledger and GL",
        "description": "The deposit sub-ledger is configured in such a way as to automatically upload deposit information, including customer account balances, accrued interest, service charges, and other information as applicable, to the general ledger during [nightly batch processing].  \n\nThis is achieved by mapping the individual deposit sub-ledgers at each [branch location] to the corresponding general ledger accounts. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBDWCGW003",
        "id": "GBCD014",
        "name": "Sub-ledger to GL reconciliation preparation - deposits (automated)",
        "description": "The deposit sub-ledger is configured in such a way as to generate a reconciliation of the deposits general ledger balances and the amounts in the deposit sub-ledger.  \n\nThis is achieved by comparing the individual general ledger balances to the respective deposit sub-ledger balances and generating a report showing any differences between the two amounts.  \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBDWCGW003",
        "id": "GBCD012",
        "name": "Sub-ledger to GL reconciliation preparation - deposits",
        "description": "Each period, the deposit sub-ledger is reconciled to the general ledger by [name] who is independent of those processing  [relevant process] transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written off, following authorization by [the name].\n\nAmounts to be followed up in the following period do not exceed [amount] individually or [amount] in the aggregate. \n\nThis control determines whether the data in the general ledger matches the sub ledger, but does not provide any assurance over the data in the sub ledger."
    },
    {
        "riskId": "GBDWCGW003",
        "id": "GBCD013",
        "name": "Sub-ledger to GL reconciliation review - deposits (manual)",
        "description": "Each period the reconciliation of the deposit sub-ledger to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBDWCGW003",
        "id": "GBCD015",
        "name": "Sub-ledger to GL reconciliation review - deposits (automated)",
        "description": "Each period the reconciliation of the deposit sub-ledger to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBDWCGW004",
        "id": "GBCI017",
        "name": "Management review of interest margin",
        "description": "Each period [the manager] reviews the following KPI(s): \n - interest margin calculation\n\nThe reviewer considers changes in the general interest rate environment; knowledge of interest rates paid and received from [investments, deposits, and loan products]; and comparisons to similar financial institutions. \n\nWhere [the reviewer] has further questions or wishes to understand reasons for the fluctuations in the KPIs, these are raised first with the appropriate manager, who provides more detailed information where applicable. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDWCGW004",
        "id": "GBCI018",
        "name": "System configuration for calculation of average balances",
        "description": "The [system] is configured in such a way as to calculate average balances for use in financial reporting. \n\nThis is achieved by inputting the formulas into the [system] for calculation. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBDWCGW004",
        "id": "GBCL018",
        "name": "Approval of interest rate tables",
        "description": "[The reviewer] reviews each change to the interest rate tables used in the system for automatic calculation of interest income. \n\nThis involves reviewing the interest rates for each loan product and comparing to industry standard rates, market conditions and the entity's expected interest margin and assessing whether the interest rates to loan products appear reasonable.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer indicates their approval by [document how approval of the item is indicated].]"
    },
    {
        "riskId": "GBDWCGW004",
        "id": "GBCD016",
        "name": "System configuration for interest expense calculations\n",
        "description": "The deposit system is configured in such a way as to calculate the amount of interest expense to recognize based on the outstanding deposit balances and the interest rates entered into the system.\n\nThis is achieved by loading the approved deposit interest expense rate tables into the system.Subsequently the system will record a daily entry to accrue interest expense until the deposit account has been closed. "
    },
    {
        "riskId": "GBDWCGW004",
        "id": "GBCD025",
        "name": "Authorization of interest rate tables",
        "description": "[The reviewer] reviews each change to the interest rate tables used in the system for automatic calculation of interest expense. \n\nThis involves reviewing the interest rates for each deposit product and comparing to industry standard rates, market conditions and the entity's expected interest margin and assessing whether the interest rates for deposit products appear reasonable.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction the reviewer indicates their approval by [document how approval of the item is indicated].]"
    },
    {
        "riskId": "GBDWCGW005",
        "id": "GBCL019",
        "name": "System configuration to not allow interest rates in excess of interest rate tables",
        "description": "The system is configured in such a way as to not allow interest rates to be applied to [loan and deposit products] in excess of the amounts in the rate tables loaded into the system.  \n\nThis is achieved by preparing rate tables and seeking approval from the proper level of management. After these have been input into the system and have been verified, individuals are not allowed to apply different interest rates without further authorization. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBDWCGW005",
        "id": "GBCL018",
        "name": "Approval of interest rate tables",
        "description": "[The reviewer] reviews each change to the interest rate tables used in the system for automatic calculation of interest income. \n\nThis involves reviewing the interest rates for each loan product and comparing to industry standard rates, market conditions and the entity's expected interest margin and assessing whether the interest rates to loan products appear reasonable.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer indicates their approval by [document how approval of the item is indicated].]"
    },
    {
        "riskId": "GBDWCGW005",
        "id": "GBCD017",
        "name": "Exception/ edit report review - changes to interest rate tables",
        "description": "An exception report is produced each period which details changes made to the interest rate tables in the system. \n\nThis is reviewed by [name] who reviews the items in the report, and the reasons for their inclusion, including any supporting information.  \n\nThe reviewer also confirms that  the report is sequential to the previous report reviewed. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDWCGW006",
        "id": "GBCL022",
        "name": "Management review of budget to actual analysis",
        "description": "Each period [the manager] reviews the following KPI(s): \n• budget to actual analysis\n\nThe reviewer considers knowledge of events that occurred during the year that would have resulted in amounts outside of the budgeted or expected amounts. \n\nWhere [the reviewer] has further questions or wishes to understand reasons for the fluctuations in the KPIs, these are raised first with the appropriate manager, who provides more detailed information where applicable. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDWCGW006",
        "id": "GBCD018",
        "name": "System configuration for calculation of service charge income",
        "description": "The deposit sub-ledger is configured in such a way as to calculate the amount of service charge income to recognize once the customer has set up the deposit account.\n\nThis is achieved by loading the authorized service charge income rate tables into the system and subsequently the system will record the service charge income when specific circumstances occur, such as a customer's balance going below zero or more withdrawals occurring than allowed in the customer service agreement.  \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBDWCGW007",
        "id": "GBCL022",
        "name": "Management review of budget to actual analysis",
        "description": "Each period [the manager] reviews the following KPI(s): \n• budget to actual analysis\n\nThe reviewer considers knowledge of events that occurred during the year that would have resulted in amounts outside of the budgeted or expected amounts. \n\nWhere [the reviewer] has further questions or wishes to understand reasons for the fluctuations in the KPIs, these are raised first with the appropriate manager, who provides more detailed information where applicable. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDWCGW007",
        "id": "GBCD019",
        "name": "System configuration for authorization of service charges being waived",
        "description": "The deposit sub-ledger is configured in such a way as to prevent unauthorized users from waiving service charges on customer accounts.  \n\nThis is achieved by setting individuals' limits within the [deposit sub-ledger] and not allowing unauthorized users to waive service charges on customer accounts.  \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBDWCGW007",
        "id": "GBCD024",
        "name": "Management review of deposit account fee waivers",
        "description": "An exception report is produced each period which details waivers of service charges and other fees on deposit accounts.\n\nThis is reviewed by [name] who reviews the items in the report, and the reasons for their inclusion, including any supporting information.  \n\nThe reviewer also confirms that the report is sequential to the previous report reviewed. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDWCGW007",
        "id": "GB165",
        "name": "Management review of deposit account fee waivers",
        "description": "An exception report is produced each period which details waivers of service charges and other fees on deposit accounts.\n\nThis is reviewed by [name] who reviews the items in the report, and the reasons for their inclusion, including any supporting information.  \n\nThe reviewer also confirms that  the report is sequential to the previous report reviewed. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDWCGW008",
        "id": "C253",
        "name": "Review of bank reconciliation",
        "description": "Each period, the [name] reviews the bank reconciliation. \n\n[Once the review is complete and the queries raised have been dealt with to the reviewer's satisfaction, they document their authorization by [document how the reviewer indicates that the review is complete.]]"
    },
    {
        "riskId": "GBDWCGW008",
        "id": "C320",
        "name": "Preparation of bank reconciliation",
        "description": "A bank reconciliation is prepared each period by [name], who is independent of those responsible for processing cash transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written-off, following  approval by [name]."
    },
    {
        "riskId": "GBDWCGW008",
        "id": "GBCL003",
        "name": "Management review of customer complaints listing",
        "description": "Each period [the manager] reviews  the listing of customer complaints that have been generated and resolved since the previous review and how items have been resolved, as well as those complaints that remain outstanding.\n\nThe review considers the customer complaints that have been resolved during the period or remain outstanding as of the date of review. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDWCGW008",
        "id": "GBCL004",
        "name": "System configuration for customer statements",
        "description": "The [name of system] is configured in such a way as to [prevent/ ensure that] [details of procedure which is prevented/enforced]. \n\nThis is achieved by [details of how achieved]. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBDWCGW008",
        "id": "GBCD021",
        "name": "Review of reconciliation between cash on hand and GL",
        "description": "Each period the reconciliation of the general ledger to the cash counted in the teller drawer, vault, or amount of cash in the automated teller machines (ATMs) is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBDWCGW008",
        "id": "GBCD020",
        "name": "Preparation of reconciliation of cash on hand to GL",
        "description": "Each period [name] reconciles the cash counted in the teller drawer, vault, or amount of cash in the automated teller machines (ATMs) to the general ledger.\n\nThis preparer is independent of those in the loans and deposits operations, who have access to view and modify the information in the respective sub-ledgers."
    },
    {
        "riskId": "GBDWCGW008",
        "id": "GBCD022",
        "name": "Preparation of reconciliation of deposits clearing and suspense accounts",
        "description": "Each period, [a staff accountant] reconciles the [type of clearing and suspense account] clearing and suspense account to the general ledger.\n\nThis individual is independent of those processing [relevant process ] transactions. All differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written off with the appropriate entries posted to the general ledger;\n• marked as  to be reclassified in the financial statements for reporting purposes. \n\nAmounts to be followed up in the following period do not exceed [amount] individually or [amount] in the aggregate."
    },
    {
        "riskId": "GBDWCGW008",
        "id": "GBCD023",
        "name": "Review of reconciliation of deposits clearing and suspense accounts",
        "description": "Each period the reconciliation of the deposit clearing and suspense account to the general ledger is reviewed by [name].\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBDWCGW008",
        "id": "GBCS003",
        "name": "Approval of deposit customers",
        "description": "Objective: Deposit customers are properly approved in accordance with the entity's policies.\n\nThe manager reviews and approves the deposit application when deposit accounts are opened. The review includes whether:\n• the information provided by the customer is input correctly to the system. \n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction the reviewer indicates their approval by [document how approval of the item is indicated].]\n"
    },
    {
        "riskId": "WCGW34",
        "id": "C275",
        "name": "KPI review - personnel expenses",
        "description": "YTYY54  "
    },
    {
        "riskId": "WCGW34",
        "id": "C336",
        "name": "Department head KPI review - personnel expenses",
        "description": "Each period key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information. \n\nKPIs include: \n[List KPIs reviewed by the relevant department manager,  such as:\n• base salary, overtime and benefits (totals and averages per employee in the department).\n• commission and bonus payments (totals and averages per employee in the department department).\n• payroll data (including numbers of employees, joiners, leavers, percentage of pay rises, and amount of variable compensation arrangements).\n\nThe reviewer identifies queries on KPIs regarding variances to expectation, such as fluctuations, outliers or unusual adjustments. The queries are raised with the appropriate person, who provides more detailed information where applicable."
    },
    {
        "riskId": "WCGW34",
        "id": "C214",
        "name": "Authorization of payroll data for processing",
        "description": "Each period [name] reviews and authorizes the [submission to the payroll processing bureau/ payroll run] prior to it being submitted/ processed. This involves reviewing the relevant payroll schedules and assessing whether [factors considered by the review, such as whether variances to the prior period greater than [amount] are appropriate].\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is  approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW34",
        "id": "C516.1",
        "name": "KPI review - personnel expenses",
        "description": "Objective: Personnel expenses are properly recorded and are consistent with management expectations.\n\nEach period, key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information. \n\nKPIs include: \n[List KPIs reviewed, such as:\n• Base salary, overtime and benefits (totals and averages per employee/ per department).\n• Commission and bonus payments (totals and averages per employee/ per department).\n• Payroll data (including numbers of employees, joiners, leavers, percentage of pay raises, and amount of variable compensation arrangements).\n• Tax deductions (percentage of total personnel expenses).\n• Social security deductions (percentage of total personnel expenses).]\n\nThe reviewer identifies queries on KPIs regarding variances to expectation, such as fluctuations, outliers or unusual adjustments. The queries are raised with the appropriate person, who provides more detailed information where applicable. \n\nAll queries are appropriately addressed [and the reviewer evidences the completion of their review by signing the schedule of KPIs, indicating approval of the recorded amounts].\n\nManagement has designed this control to detect and correct potential misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW37",
        "id": "C253",
        "name": "Review of bank reconciliation",
        "description": "Each period, the [name] reviews the bank reconciliation. \n\n[Once the review is complete and the queries raised have been dealt with to the reviewer's satisfaction, they document their authorization by [document how the reviewer indicates that the review is complete.]]"
    },
    {
        "riskId": "WCGW37",
        "id": "C320",
        "name": "Preparation of bank reconciliation",
        "description": "A bank reconciliation is prepared each period by [name], who is independent of those responsible for processing cash transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written-off, following  approval by [name]."
    },
    {
        "riskId": "WCGW37",
        "id": "C516.1",
        "name": "KPI review - personnel expenses",
        "description": "Objective: Personnel expenses are properly recorded and are consistent with management expectations.\n\nEach period, key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information. \n\nKPIs include: \n[List KPIs reviewed, such as:\n• Base salary, overtime and benefits (totals and averages per employee/ per department).\n• Commission and bonus payments (totals and averages per employee/ per department).\n• Payroll data (including numbers of employees, joiners, leavers, percentage of pay raises, and amount of variable compensation arrangements).\n• Tax deductions (percentage of total personnel expenses).\n• Social security deductions (percentage of total personnel expenses).]\n\nThe reviewer identifies queries on KPIs regarding variances to expectation, such as fluctuations, outliers or unusual adjustments. The queries are raised with the appropriate person, who provides more detailed information where applicable. \n\nAll queries are appropriately addressed [and the reviewer evidences the completion of their review by signing the schedule of KPIs, indicating approval of the recorded amounts].\n\nManagement has designed this control to detect and correct potential misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW431",
        "id": "C427",
        "name": "Estimate preparation control - present value of defined benefit obligations",
        "description": "Management has policies and procedures to help reduce the potential risks over the preparation of the estimate as follows:\n[document management’s policies and procedures in place over:\n- using qualified and experienced personnel including external experts. \n- review and approval of the relevant factors and the development of assumptions by higher levels of management. \n- the periodic review of the methods of developing the factors and assumptions; \n- a comparison of accounting estimates made in prior periods with results in subsequent periods. \n- the completeness, relevance and accuracy of the underlying data used in the preparation of the estimate.]"
    },
    {
        "riskId": "WCGW432",
        "id": "C275",
        "name": "KPI review - personnel expenses",
        "description": "Each period key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information. \n\nKPIs include: \n[List KPIs reviewed, such as:\n• base salary, overtime and benefits (totals and averages per employee/ per department).\n• commission and bonus payments (totals and averages per employee/ per department).\n• payroll data (including numbers of employees, joiners, leavers, percentage of pay rises, and amount of variable compensation arrangements).\n• tax deductions (percentage of total personnel expenses).\n• social security deductions (percentage of total personnel expenses)]\n\nThe reviewer identifies queries on KPIs regarding variances to expectation, such as fluctuations, outliers or unusual adjustments. The queries are raised with the appropriate person, who provides more detailed information where applicable. \n\nAll queries are appropriately addressed [, and the reviewer evidences the completion of their review by signing the schedule of KPIs, indicating approval of the recorded amounts.]\n\nManagement has designed this control to detect and correct potential misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW432",
        "id": "C418",
        "name": "Disclosure review - defined benefit plans",
        "description": "Management has controls in place to help reduce the potential risks over the preparation of the disclosures as follows:\n[document management’s controls over the preparation of the disclosure, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used in the preparation of the disclosures.\n• consideration by appropriate levels of management of whether the disclosures in the financial statements  are in accordance with the requirements of the applicable financial reporting framework.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]\n\n[Where the disclosures include subjective elements, document management’s controls relating to the review and approval of the assumptions and data inputs by the appropriate levels of management and, where appropriate, those charged with governance.]"
    },
    {
        "riskId": "WCGW432",
        "id": "c428",
        "name": "Estimate preparation control - fair value of plan assets",
        "description": "Management has policies and procedures to help reduce the potential risks over the preparation of the estimate as follows: [document management’s policies and procedures in place over:\n- using qualified and experienced personnel including external experts; \n- review and approval of the relevant factors and the development of assumptions by higher levels of management; \n- the periodic review of the methods of developing the factors and assumptions; \n- a comparison of accounting estimates made in prior periods with results in subsequent periods; \n- the completeness, relevance and accuracy of the underlying data used in the preparation of the estimate]"
    },
    {
        "riskId": "WCGW725",
        "id": "C207",
        "name": "Authorization of payroll change forms",
        "description": "[The name] reviews and authorizes each [payroll change form] prior to it being processed. This involves  reviewing the form and assessing whether [it is in line with the entity's policies.].\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they, [document how the approver indicates that the item is  approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW725",
        "id": "C288",
        "name": "Exception/ edit report review - payroll data",
        "description": "An exception report is produced each period which details all payroll data amendments [, including new employee details, bank details, pay rates, bonus payments, commission payments, overtime etc.]. \n\nThis is reviewed by [name] who reviews the items in the report, and the reasons for their inclusion, including any supporting information.  \n\nThe reviewer also confirms that  the report is sequential to the previous report reviewed. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW725",
        "id": "C275",
        "name": "KPI review - personnel expenses",
        "description": "Each period key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information. \n\nKPIs include: \n[List KPIs reviewed, such as:\n• base salary, overtime and benefits (totals and averages per employee/ per department).\n• commission and bonus payments (totals and averages per employee/ per department).\n• payroll data (including numbers of employees, joiners, leavers, percentage of pay rises, and amount of variable compensation arrangements).\n• tax deductions (percentage of total personnel expenses).\n• social security deductions (percentage of total personnel expenses)]\n\nThe reviewer identifies queries on KPIs regarding variances to expectation, such as fluctuations, outliers or unusual adjustments. The queries are raised with the appropriate person, who provides more detailed information where applicable. \n\nAll queries are appropriately addressed [, and the reviewer evidences the completion of their review by signing the schedule of KPIs, indicating approval of the recorded amounts.]\n\nManagement has designed this control to detect and correct potential misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW725",
        "id": "C336",
        "name": "Department head KPI review - personnel expenses",
        "description": "Each period key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information. \n\nKPIs include: \n[List KPIs reviewed by the relevant department manager,  such as:\n• base salary, overtime and benefits (totals and averages per employee in the department).\n• commission and bonus payments (totals and averages per employee in the department department).\n• payroll data (including numbers of employees, joiners, leavers, percentage of pay rises, and amount of variable compensation arrangements).\n\nThe reviewer identifies queries on KPIs regarding variances to expectation, such as fluctuations, outliers or unusual adjustments. The queries are raised with the appropriate person, who provides more detailed information where applicable."
    },
    {
        "riskId": "WCGW725",
        "id": "C214",
        "name": "Authorization of payroll data for processing",
        "description": "Each period [name] reviews and authorizes the [submission to the payroll processing bureau/ payroll run] prior to it being submitted/ processed. This involves reviewing the relevant payroll schedules and assessing whether [factors considered by the review, such as whether variances to the prior period greater than [amount] are appropriate].\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is  approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW725",
        "id": "C516.1",
        "name": "KPI review - personnel expenses",
        "description": "Objective: Personnel expenses are properly recorded and are consistent with management expectations.\n\nEach period, key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information. \n\nKPIs include: \n[List KPIs reviewed, such as:\n• Base salary, overtime and benefits (totals and averages per employee/ per department).\n• Commission and bonus payments (totals and averages per employee/ per department).\n• Payroll data (including numbers of employees, joiners, leavers, percentage of pay raises, and amount of variable compensation arrangements).\n• Tax deductions (percentage of total personnel expenses).\n• Social security deductions (percentage of total personnel expenses).]\n\nThe reviewer identifies queries on KPIs regarding variances to expectation, such as fluctuations, outliers or unusual adjustments. The queries are raised with the appropriate person, who provides more detailed information where applicable. \n\nAll queries are appropriately addressed [and the reviewer evidences the completion of their review by signing the schedule of KPIs, indicating approval of the recorded amounts].\n\nManagement has designed this control to detect and correct potential misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW726",
        "id": "C275",
        "name": "KPI review - personnel expenses",
        "description": "Each period key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information. \n\nKPIs include: \n[List KPIs reviewed, such as:\n• base salary, overtime and benefits (totals and averages per employee/ per department).\n• commission and bonus payments (totals and averages per employee/ per department).\n• payroll data (including numbers of employees, joiners, leavers, percentage of pay rises, and amount of variable compensation arrangements).\n• tax deductions (percentage of total personnel expenses).\n• social security deductions (percentage of total personnel expenses)]\n\nThe reviewer identifies queries on KPIs regarding variances to expectation, such as fluctuations, outliers or unusual adjustments. The queries are raised with the appropriate person, who provides more detailed information where applicable. \n\nAll queries are appropriately addressed [, and the reviewer evidences the completion of their review by signing the schedule of KPIs, indicating approval of the recorded amounts.]\n\nManagement has designed this control to detect and correct potential misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW726",
        "id": "C336",
        "name": "Department head KPI review - personnel expenses",
        "description": "Each period key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information. \n\nKPIs include: \n[List KPIs reviewed by the relevant department manager,  such as:\n• base salary, overtime and benefits (totals and averages per employee in the department).\n• commission and bonus payments (totals and averages per employee in the department department).\n• payroll data (including numbers of employees, joiners, leavers, percentage of pay rises, and amount of variable compensation arrangements).\n\nThe reviewer identifies queries on KPIs regarding variances to expectation, such as fluctuations, outliers or unusual adjustments. The queries are raised with the appropriate person, who provides more detailed information where applicable."
    },
    {
        "riskId": "WCGW726",
        "id": "C359",
        "name": "System configuration for payroll calculations",
        "description": "The payroll system is configured in such a way as to ensure that the payroll calculations and related payroll taxes, social security and other deductions are correct.\n\nThis is achieved by [details of how achieved]. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW726",
        "id": "C290",
        "name": "Review of payroll reconciliation",
        "description": "Each period the reconciliation of the [payroll expense and balances] to the [report from the [payroll processing bureau/ payroll system] and other supporting information as required] is reviewed by [name]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review  is complete.]]"
    },
    {
        "riskId": "WCGW726",
        "id": "C325",
        "name": "Preparation of payroll reconciliation",
        "description": "Each period, [name] reconciles the [payroll expense and balances] to the [report from the [payroll processing bureau/ payroll system] and other supporting information as required]. \n\nThis preparer is independent of those [in the area of]."
    },
    {
        "riskId": "WCGW726",
        "id": "C516.1",
        "name": "KPI review - personnel expenses",
        "description": "Objective: Personnel expenses are properly recorded and are consistent with management expectations.\n\nEach period, key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information. \n\nKPIs include: \n[List KPIs reviewed, such as:\n• Base salary, overtime and benefits (totals and averages per employee/ per department).\n• Commission and bonus payments (totals and averages per employee/ per department).\n• Payroll data (including numbers of employees, joiners, leavers, percentage of pay raises, and amount of variable compensation arrangements).\n• Tax deductions (percentage of total personnel expenses).\n• Social security deductions (percentage of total personnel expenses).]\n\nThe reviewer identifies queries on KPIs regarding variances to expectation, such as fluctuations, outliers or unusual adjustments. The queries are raised with the appropriate person, who provides more detailed information where applicable. \n\nAll queries are appropriately addressed [and the reviewer evidences the completion of their review by signing the schedule of KPIs, indicating approval of the recorded amounts].\n\nManagement has designed this control to detect and correct potential misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW404",
        "id": "C220",
        "name": "Authorization of payroll payments",
        "description": "[The name] reviews and authorizes each [report listing payroll details by employee] prior to payment. This involves reviewing the [amount to be paid to each employee] and assessing whether [it is accurate based on salary, commissions and bonus.]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is  approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW404",
        "id": "C290",
        "name": "Review of payroll reconciliation",
        "description": "Each period the reconciliation of the [payroll expense and balances] to the [report from the [payroll processing bureau/ payroll system] and other supporting information as required] is reviewed by [name]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review  is complete.]]"
    },
    {
        "riskId": "WCGW404",
        "id": "C325",
        "name": "Preparation of payroll reconciliation",
        "description": "Each period, [name] reconciles the [payroll expense and balances] to the [report from the [payroll processing bureau/ payroll system] and other supporting information as required]. \n\nThis preparer is independent of those [in the area of]."
    },
    {
        "riskId": "WCGW406",
        "id": "C275",
        "name": "KPI review - personnel expenses",
        "description": "Each period key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information. \n\nKPIs include: \n[List KPIs reviewed, such as:\n• base salary, overtime and benefits (totals and averages per employee/ per department).\n• commission and bonus payments (totals and averages per employee/ per department).\n• payroll data (including numbers of employees, joiners, leavers, percentage of pay rises, and amount of variable compensation arrangements).\n• tax deductions (percentage of total personnel expenses).\n• social security deductions (percentage of total personnel expenses)]\n\nThe reviewer identifies queries on KPIs regarding variances to expectation, such as fluctuations, outliers or unusual adjustments. The queries are raised with the appropriate person, who provides more detailed information where applicable. \n\nAll queries are appropriately addressed [, and the reviewer evidences the completion of their review by signing the schedule of KPIs, indicating approval of the recorded amounts.]\n\nManagement has designed this control to detect and correct potential misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW406",
        "id": "C336",
        "name": "Department head KPI review - personnel expenses",
        "description": "Each period key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information. \n\nKPIs include: \n[List KPIs reviewed by the relevant department manager,  such as:\n• base salary, overtime and benefits (totals and averages per employee in the department).\n• commission and bonus payments (totals and averages per employee in the department department).\n• payroll data (including numbers of employees, joiners, leavers, percentage of pay rises, and amount of variable compensation arrangements).\n\nThe reviewer identifies queries on KPIs regarding variances to expectation, such as fluctuations, outliers or unusual adjustments. The queries are raised with the appropriate person, who provides more detailed information where applicable."
    },
    {
        "riskId": "WCGW406",
        "id": "C315",
        "name": "Management review of payroll expense accruals",
        "description": "Each period the schedule to support the payroll liabilities (including accrued expenses for salary, bonus, vacation, payroll taxes,  social security and other items) and the reconciliation of the schedule to the general ledger is reviewed by [name]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW418",
        "id": "C309",
        "name": "Disclosure review - personnel expenses",
        "description": "Management has controls in place to help reduce the potential risks over the preparation of the disclosures as follows:\n[document management’s controls over the preparation of the disclosure, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used in the preparation of the disclosures.\n• consideration by appropriate levels of management of whether the disclosures in the financial statements  are in accordance with the requirements of the applicable financial reporting framework.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]\n\n[Where the disclosures include subjective elements, document management’s controls relating to the review and approval of the assumptions and data inputs by the appropriate levels of management and, where appropriate, those charged with governance.]"
    },
    {
        "riskId": "WCGW442",
        "id": "C417",
        "name": "Disclosure review - share-based payments",
        "description": "Management has controls in place to help reduce the potential risks over the preparation of the disclosures as follows:\n[document management’s controls over the preparation of the disclosure, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used in the preparation of the disclosures.\n• consideration by appropriate levels of management of whether the disclosures in the financial statements  are in accordance with the requirements of the applicable financial reporting framework.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]\n\n[Where the disclosures include subjective elements, document management’s controls relating to the review and approval of the assumptions and data inputs by the appropriate levels of management and, where appropriate, those charged with governance.]"
    },
    {
        "riskId": "WCGW440",
        "id": "C603",
        "name": "Board review of performance based employee benefit programs",
        "description": "The board reviews each performance based employee benefit program at the periodic board meeting. \n\nThe board is provided with supporting documentation, which has been reconciled to  the payroll ledger and equity ledger as appropriate.   The board considers both the permissibility and appropriateness of the award in relation to the entity's policies and procedures, as well as the appropriateness of the entity's accounting treatment and disclosures.\n\nIf further review is deemed necessary, the board asks for clarification  or additional information and any decisions are deferred until the next meeting. \n\nEvidence of the board's approval is indicated in the minutes. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW440",
        "id": "C604",
        "name": "Management review of share-based payments",
        "description": "Each period [the manager] reviews the schedule of share-based payments.\n\nThe review considers the calculation of the share-based payment expense for the period. Management considers whether the expense is appropriate based on the grant date of the award, the terms and conditions of the award (including vesting provisions), and the entity's accounting policies.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW215",
        "id": "C310",
        "name": "Review of reconciliation of payment run to payment file",
        "description": "Each period the reconciliation of the payment run (i.e. the electronic funds transfers and/or list of cheques) to the payment file (i.e. the items which were identified, at the point of entry to the system, as being due for payment on the current date) is reviewed by [name]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review  is complete.]]"
    },
    {
        "riskId": "WCGW215",
        "id": "C408",
        "name": "Management review of system foreign exchange rates",
        "description": "Each period [the manager] reviews the schedule of foreign exchange rates used by the relevant system, which includes currency types, end-of-period exchange rates, and average exchange rates during the period.\n\nThe review considers the source of the exchange rates and the accuracy of their input into the system.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW215",
        "id": "C409",
        "name": "System configuration for foreign currencies",
        "description": "The [financial reporting system] is configured in such a way as to ensure that the correct foreign exchange rates are used to translate balances denominated in foreign currencies.\n\nThis is achieved by the system applying the rate identified as relevant to the balance at each period end.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW44",
        "id": "C253",
        "name": "Review of bank reconciliation",
        "description": "Each period, the [name] reviews the bank reconciliation. \n\n[Once the review is complete and the queries raised have been dealt with to the reviewer's satisfaction, they document their authorization by [document how the reviewer indicates that the review is complete.]]"
    },
    {
        "riskId": "WCGW44",
        "id": "C320",
        "name": "Preparation of bank reconciliation",
        "description": "A bank reconciliation is prepared each period by [name], who is independent of those responsible for processing cash transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written-off, following  approval by [name]."
    },
    {
        "riskId": "GBTWCGW001",
        "id": "GBCT001",
        "name": "Authorization of borrowings from financial institutions",
        "description": "[The name] reviews and authorizes each borrowing from third party financial institutions and contacts the other financial institution. This involves reviewing the necessity for the wire transfer from the third party financial institution, repayment terms, and the interest rate being charged for the borrowing and assessing  whether [factors reviewed/ approved]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW001",
        "id": "GBCT002",
        "name": "Preparation of roll-forward of borrowings from third party financial institutions",
        "description": "Each period [name] who is independent of those processing transactions in the  area of [ ], prepares [the schedule, which reconciles what to what or shows what]. \n\nThis  determines whether [what equals what]. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW001",
        "id": "GBCT003",
        "name": "Management review of roll-forward of borrowings from third party financial institutions",
        "description": "Each period the schedule to support the roll-forward schedule of borrowings from third party financial institutions is prepared by [an individual in the accounting department] and the reconciliation of the schedule to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW001",
        "id": "GBCT004",
        "name": "Preparation of reconciliation of third party financial institution statements to GL",
        "description": "Each period [name] reconciles the borrowings statement(s) from the third party financial institution(s) to the general ledger\n\nThis preparer is independent of those who initiate or authorize the borrowing, or reconcile the bank account in which the wire transfer is received. "
    },
    {
        "riskId": "GBTWCGW001",
        "id": "GBCT005",
        "name": "Review of reconciliation of third party financial institution statements to GL",
        "description": "Each period the reconciliation of the borrowings statement(s) from the third party financial institution(s) to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBTWCGW002",
        "id": "GBCI017",
        "name": "Management review of interest margin",
        "description": "Each period [the manager] reviews the following KPI(s): \n - interest margin calculation\n\nThe reviewer considers changes in the general interest rate environment; knowledge of interest rates paid and received from [investments, deposits, and loan products]; and comparisons to similar financial institutions. \n\nWhere [the reviewer] has further questions or wishes to understand reasons for the fluctuations in the KPIs, these are raised first with the appropriate manager, who provides more detailed information where applicable. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW002",
        "id": "GBCT004",
        "name": "Preparation of reconciliation of third party financial institution statements to GL",
        "description": "Each period [name] reconciles the borrowings statement(s) from the third party financial institution(s) to the general ledger\n\nThis preparer is independent of those who initiate or authorize the borrowing, or reconcile the bank account in which the wire transfer is received. "
    },
    {
        "riskId": "GBTWCGW002",
        "id": "GBCT005",
        "name": "Review of reconciliation of third party financial institution statements to GL",
        "description": "Each period the reconciliation of the borrowings statement(s) from the third party financial institution(s) to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBTWCGW002",
        "id": "GBCT025",
        "name": "System calculation of interest expense  other borrowings",
        "description": "The other borrowing sub-ledger is configured in such a way as to calculate the amount of interest expense to recognize based on the outstanding debt and borrowing balances and interest rate entered into the system upon the issuance of the debt or borrowings.\n\nThis is achieved by loading the interest expense rate into the system. For variable rate debt or borrowings, both the variable index and the reset date are input into the system. Subsequently the system will record a daily entry to interest expense and accrued expense until the debt or borrowing balance has been repaid.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount].\n"
    },
    {
        "riskId": "GBTWCGW002",
        "id": "GB159",
        "name": "System configuration for calculation of interest expense on other borrowings",
        "description": "The other borrowing sub-ledger is configured in such a way as to calculate the amount of interest expense to recognize based on the outstanding debt and borrowing balances and interest rate entered into the system upon the issuance of the debt or borrowings.\n\nThis is achieved by loading the interest expense rate into the system. For variable rate debt or borrowings, both the variable index and the reset date are input into the system. Subsequently the system will record a daily entry to interest expense and accrued expense until the debt or borrowing  balance has been repaid.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBTWCGW003",
        "id": "C253",
        "name": "Review of bank reconciliation",
        "description": "Each period, the [name] reviews the bank reconciliation. \n\n[Once the review is complete and the queries raised have been dealt with to the reviewer's satisfaction, they document their authorization by [document how the reviewer indicates that the review is complete.]]"
    },
    {
        "riskId": "GBTWCGW003",
        "id": "C320",
        "name": "Preparation of bank reconciliation",
        "description": "A bank reconciliation is prepared each period by [name], who is independent of those responsible for processing cash transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written-off, following  approval by [name]."
    },
    {
        "riskId": "GBTWCGW003",
        "id": "GBCT002",
        "name": "Preparation of roll-forward of borrowings from third party financial institutions",
        "description": "Each period [name] who is independent of those processing transactions in the  area of [ ], prepares [the schedule, which reconciles what to what or shows what]. \n\nThis  determines whether [what equals what]. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW003",
        "id": "GBCT003",
        "name": "Management review of roll-forward of borrowings from third party financial institutions",
        "description": "Each period the schedule to support the roll-forward schedule of borrowings from third party financial institutions is prepared by [an individual in the accounting department] and the reconciliation of the schedule to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW003",
        "id": "GBCT004",
        "name": "Preparation of reconciliation of third party financial institution statements to GL",
        "description": "Each period [name] reconciles the borrowings statement(s) from the third party financial institution(s) to the general ledger\n\nThis preparer is independent of those who initiate or authorize the borrowing, or reconcile the bank account in which the wire transfer is received. "
    },
    {
        "riskId": "GBTWCGW003",
        "id": "GBCT005",
        "name": "Review of reconciliation of third party financial institution statements to GL",
        "description": "Each period the reconciliation of the borrowings statement(s) from the third party financial institution(s) to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBTWCGW003",
        "id": "GBCT006",
        "name": "Authorization of wire transfers",
        "description": "[The name] reviews and authorizes each wire transfer. This involves reviewing the rationale for the wire transfer, the financial institution account information, and other pertinent information as applicable, and assessing whether [factors reviewed/ approved]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm their authorization by [document how authorized].]\n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW004",
        "id": "GBCT007",
        "name": "Authorization of repurchase agreements with third parties",
        "description": "[The name] reviews and authorizes each repurchase agreement. This involves reviewing the terms of the repurchase agreement, such as [interest rate, cash to be received, maturity date, and listing of securities to be sold under the terms of the repurchase agreement] and assessing  whether [factors reviewed/ approved]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm their authorization by [document how authorized].]\n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW004",
        "id": "GBCT008",
        "name": "Preparation of roll-forward of repurchase agreements",
        "description": "Each period [name], who is independent of those processing transactions in the  area of [ ], prepares [the schedule, which reconciles what to what or shows what]. \n\nThis determines whether [what equals what]. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW004",
        "id": "GBCT010",
        "name": "Management review of roll-forward of repurchase agreements",
        "description": "Each period the schedule to support the roll-forward schedule of repurchase agreements is prepared by [an individual in the accounting department] and the reconciliation of the schedule to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW004",
        "id": "GBCT011",
        "name": "Preparation of reconciliation of repurchase agreements schedule to GL",
        "description": "Each period [name] reconciles the schedule of repurchase agreements to the general ledger and original repurchase agreements.  \n\nThis preparer is independent of those who initiate the repurchase agreement transaction"
    },
    {
        "riskId": "GBTWCGW004",
        "id": "GBCT012",
        "name": "Review of reconciliation of repurchase agreements schedule to GL",
        "description": "Each period the reconciliation of the  general ledger and original repurchase agreements to  the  schedule of repurchase agreements is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBTWCGW004",
        "id": "GBCT013",
        "name": "Management review of legal agreements in place for repurchase agreements",
        "description": "Each period [the manager] reviews the legal agreements in place regarding repurchase agreements the entity enters into with third parties.\n\nThe review considers the legal agreements in place regarding repurchase agreements the entity enters into with third parties.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW005",
        "id": "GBCT011",
        "name": "Preparation of reconciliation of repurchase agreements schedule to GL",
        "description": "Each period [name] reconciles the schedule of repurchase agreements to the general ledger and original repurchase agreements.  \n\nThis preparer is independent of those who initiate the repurchase agreement transaction"
    },
    {
        "riskId": "GBTWCGW005",
        "id": "GBCT012",
        "name": "Review of reconciliation of repurchase agreements schedule to GL",
        "description": "Each period the reconciliation of the  general ledger and original repurchase agreements to  the  schedule of repurchase agreements is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBTWCGW005",
        "id": "GBCT013",
        "name": "Management review of legal agreements in place for repurchase agreements",
        "description": "Each period [the manager] reviews the legal agreements in place regarding repurchase agreements the entity enters into with third parties.\n\nThe review considers the legal agreements in place regarding repurchase agreements the entity enters into with third parties.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW006",
        "id": "GBCI017",
        "name": "Management review of interest margin",
        "description": "Each period [the manager] reviews the following KPI(s): \n - interest margin calculation\n\nThe reviewer considers changes in the general interest rate environment; knowledge of interest rates paid and received from [investments, deposits, and loan products]; and comparisons to similar financial institutions. \n\nWhere [the reviewer] has further questions or wishes to understand reasons for the fluctuations in the KPIs, these are raised first with the appropriate manager, who provides more detailed information where applicable. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW006",
        "id": "GBCT011",
        "name": "Preparation of reconciliation of repurchase agreements schedule to GL",
        "description": "Each period [name] reconciles the schedule of repurchase agreements to the general ledger and original repurchase agreements.  \n\nThis preparer is independent of those who initiate the repurchase agreement transaction"
    },
    {
        "riskId": "GBTWCGW006",
        "id": "GBCT012",
        "name": "Review of reconciliation of repurchase agreements schedule to GL",
        "description": "Each period the reconciliation of the  general ledger and original repurchase agreements to  the  schedule of repurchase agreements is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBTWCGW007",
        "id": "C253",
        "name": "Review of bank reconciliation",
        "description": "Each period, the [name] reviews the bank reconciliation. \n\n[Once the review is complete and the queries raised have been dealt with to the reviewer's satisfaction, they document their authorization by [document how the reviewer indicates that the review is complete.]]"
    },
    {
        "riskId": "GBTWCGW007",
        "id": "C320",
        "name": "Preparation of bank reconciliation",
        "description": "A bank reconciliation is prepared each period by [name], who is independent of those responsible for processing cash transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written-off, following  approval by [name]."
    },
    {
        "riskId": "GBTWCGW007",
        "id": "GBCT006",
        "name": "Authorization of wire transfers",
        "description": "[The name] reviews and authorizes each wire transfer. This involves reviewing the rationale for the wire transfer, the financial institution account information, and other pertinent information as applicable, and assessing whether [factors reviewed/ approved]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm their authorization by [document how authorized].]\n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW007",
        "id": "GBCT008",
        "name": "Preparation of roll-forward of repurchase agreements",
        "description": "Each period [name], who is independent of those processing transactions in the  area of [ ], prepares [the schedule, which reconciles what to what or shows what]. \n\nThis determines whether [what equals what]. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW007",
        "id": "GBCT010",
        "name": "Management review of roll-forward of repurchase agreements",
        "description": "Each period the schedule to support the roll-forward schedule of repurchase agreements is prepared by [an individual in the accounting department] and the reconciliation of the schedule to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW007",
        "id": "GBCT011",
        "name": "Preparation of reconciliation of repurchase agreements schedule to GL",
        "description": "Each period [name] reconciles the schedule of repurchase agreements to the general ledger and original repurchase agreements.  \n\nThis preparer is independent of those who initiate the repurchase agreement transaction"
    },
    {
        "riskId": "GBTWCGW007",
        "id": "GBCT012",
        "name": "Review of reconciliation of repurchase agreements schedule to GL",
        "description": "Each period the reconciliation of the  general ledger and original repurchase agreements to  the  schedule of repurchase agreements is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBTWCGW008",
        "id": "GBCT014",
        "name": "Authorization of loans and advances to third party financial institutions",
        "description": "[The name] reviews and authorizes each loan or advance to third party financial institutions and contacts the other financial institution. This involves reviewing the ability to provide excess funds to the third party financial institution, repayment terms, and the interest that will be earned from the transaction and assessing whether [factors reviewed/ approved]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm their authorization by [document how authorized].]\n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW008",
        "id": "GBCT015",
        "name": "Preparation of roll-forward of loans and advances to third party financial institutions",
        "description": "Each period [the name] who is independent of those processing transactions in the area of [ ], prepares [the schedule, which reconciles what to  what or shows what]. \n\nThis determines whether [what equals what]. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW008",
        "id": "GBCT016",
        "name": "Management review of roll-forward of loans and advances to third party financial institutions",
        "description": "Each period the schedule to support the roll-forward schedule of loans and advances to third party financial institutions is prepared by [an individual in the accounting department] and the reconciliation of the schedule to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW009",
        "id": "GBCI017",
        "name": "Management review of interest margin",
        "description": "Each period [the manager] reviews the following KPI(s): \n - interest margin calculation\n\nThe reviewer considers changes in the general interest rate environment; knowledge of interest rates paid and received from [investments, deposits, and loan products]; and comparisons to similar financial institutions. \n\nWhere [the reviewer] has further questions or wishes to understand reasons for the fluctuations in the KPIs, these are raised first with the appropriate manager, who provides more detailed information where applicable. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW009",
        "id": "GBCT015",
        "name": "Preparation of roll-forward of loans and advances to third party financial institutions",
        "description": "Each period [the name] who is independent of those processing transactions in the area of [ ], prepares [the schedule, which reconciles what to  what or shows what]. \n\nThis determines whether [what equals what]. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW009",
        "id": "GBCT016",
        "name": "Management review of roll-forward of loans and advances to third party financial institutions",
        "description": "Each period the schedule to support the roll-forward schedule of loans and advances to third party financial institutions is prepared by [an individual in the accounting department] and the reconciliation of the schedule to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW009",
        "id": "GB176",
        "name": "System configuration - interest income calculations",
        "description": "The loan, cash, and investment ledger is configured in such a way as to calculate the amount of interest income to recognize based on the outstanding balances of interest earning assets and interest rate data entered into the system upon the issuance of the debt or borrowings.\n\nThis is achieved by loading the interest rate into the system. For variable rate assets, both the variable index and the reset date are input into the system. Subsequently the system will record a daily entry to interest expense and accrued interest expense until the debt or borrowing balance has been repaid.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBTWCGW010",
        "id": "GBCT017",
        "name": "Authorization of reverse repurchase agreements with third parties",
        "description": "[The name] reviews and authorizes each reverse repurchase agreement. This involves reviewing the terms of the reverse repurchase agreement, such as [interest rate, cash to be provided to the third party, maturity date, and listing of securities to be purchased under the terms of the reverse repurchase agreement] and assessing whether [factors reviewed/ approved]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm their authorization by [document how authorized].]\n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW010",
        "id": "GBCT018",
        "name": "Preparation of roll-forward of reverse repurchase agreements with third party financial institutions",
        "description": "Each period [name], who is independent of those processing transactions in the area of [ ], prepares [the schedule, which reconciles what to what or shows what]. \n\nThis determines whether [what equals what]. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW010",
        "id": "GBCT019",
        "name": "Management review of roll-forward of reverse repurchase agreements with third party financial institutions",
        "description": "Each period the schedule to support the roll-forward schedule of reverse repurchase agreements with third parties is prepared by [an individual in the accounting department] and the reconciliation of the schedule to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW011",
        "id": "GBCI017",
        "name": "Management review of interest margin",
        "description": "Each period [the manager] reviews the following KPI(s): \n - interest margin calculation\n\nThe reviewer considers changes in the general interest rate environment; knowledge of interest rates paid and received from [investments, deposits, and loan products]; and comparisons to similar financial institutions. \n\nWhere [the reviewer] has further questions or wishes to understand reasons for the fluctuations in the KPIs, these are raised first with the appropriate manager, who provides more detailed information where applicable. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW011",
        "id": "GBCT018",
        "name": "Preparation of roll-forward of reverse repurchase agreements with third party financial institutions",
        "description": "Each period [name], who is independent of those processing transactions in the area of [ ], prepares [the schedule, which reconciles what to what or shows what]. \n\nThis determines whether [what equals what]. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW011",
        "id": "GBCT019",
        "name": "Management review of roll-forward of reverse repurchase agreements with third party financial institutions",
        "description": "Each period the schedule to support the roll-forward schedule of reverse repurchase agreements with third parties is prepared by [an individual in the accounting department] and the reconciliation of the schedule to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW012",
        "id": "C253",
        "name": "Review of bank reconciliation",
        "description": "Each period, the [name] reviews the bank reconciliation. \n\n[Once the review is complete and the queries raised have been dealt with to the reviewer's satisfaction, they document their authorization by [document how the reviewer indicates that the review is complete.]]"
    },
    {
        "riskId": "GBTWCGW012",
        "id": "C320",
        "name": "Preparation of bank reconciliation",
        "description": "A bank reconciliation is prepared each period by [name], who is independent of those responsible for processing cash transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written-off, following  approval by [name]."
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCL003",
        "name": "Management review of customer complaints listing",
        "description": "Each period [the manager] reviews  the listing of customer complaints that have been generated and resolved since the previous review and how items have been resolved, as well as those complaints that remain outstanding.\n\nThe review considers the customer complaints that have been resolved during the period or remain outstanding as of the date of review. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCL004",
        "name": "System configuration for customer statements",
        "description": "The [name of system] is configured in such a way as to [prevent/ ensure that] [details of procedure which is prevented/enforced]. \n\nThis is achieved by [details of how achieved]. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCD011",
        "name": "System interface between deposit sub-ledger and GL",
        "description": "The deposit sub-ledger is configured in such a way as to automatically upload deposit information, including customer account balances, accrued interest, service charges, and other information as applicable, to the general ledger during [nightly batch processing].  \n\nThis is achieved by mapping the individual deposit sub-ledgers at each [branch location] to the corresponding general ledger accounts. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCD014",
        "name": "Sub-ledger to GL reconciliation preparation - deposits (automated)",
        "description": "The deposit sub-ledger is configured in such a way as to generate a reconciliation of the deposits general ledger balances and the amounts in the deposit sub-ledger.  \n\nThis is achieved by comparing the individual general ledger balances to the respective deposit sub-ledger balances and generating a report showing any differences between the two amounts.  \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCD012",
        "name": "Sub-ledger to GL reconciliation preparation - deposits",
        "description": "Each period, the deposit sub-ledger is reconciled to the general ledger by [name] who is independent of those processing  [relevant process] transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written off, following authorization by [the name].\n\nAmounts to be followed up in the following period do not exceed [amount] individually or [amount] in the aggregate. \n\nThis control determines whether the data in the general ledger matches the sub ledger, but does not provide any assurance over the data in the sub ledger."
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCD013",
        "name": "Sub-ledger to GL reconciliation review - deposits (manual)",
        "description": "Each period the reconciliation of the deposit sub-ledger to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCD015",
        "name": "Sub-ledger to GL reconciliation review - deposits (automated)",
        "description": "Each period the reconciliation of the deposit sub-ledger to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCD021",
        "name": "Review of reconciliation between cash on hand and GL",
        "description": "Each period the reconciliation of the general ledger to the cash counted in the teller drawer, vault, or amount of cash in the automated teller machines (ATMs) is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCD020",
        "name": "Preparation of reconciliation of cash on hand to GL",
        "description": "Each period [name] reconciles the cash counted in the teller drawer, vault, or amount of cash in the automated teller machines (ATMs) to the general ledger.\n\nThis preparer is independent of those in the loans and deposits operations, who have access to view and modify the information in the respective sub-ledgers."
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCT004",
        "name": "Preparation of reconciliation of third party financial institution statements to GL",
        "description": "Each period [name] reconciles the borrowings statement(s) from the third party financial institution(s) to the general ledger\n\nThis preparer is independent of those who initiate or authorize the borrowing, or reconcile the bank account in which the wire transfer is received. "
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCT011",
        "name": "Preparation of reconciliation of repurchase agreements schedule to GL",
        "description": "Each period [name] reconciles the schedule of repurchase agreements to the general ledger and original repurchase agreements.  \n\nThis preparer is independent of those who initiate the repurchase agreement transaction"
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCT012",
        "name": "Review of reconciliation of repurchase agreements schedule to GL",
        "description": "Each period the reconciliation of the  general ledger and original repurchase agreements to  the  schedule of repurchase agreements is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCT015",
        "name": "Preparation of roll-forward of loans and advances to third party financial institutions",
        "description": "Each period [the name] who is independent of those processing transactions in the area of [ ], prepares [the schedule, which reconciles what to  what or shows what]. \n\nThis determines whether [what equals what]. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCT016",
        "name": "Management review of roll-forward of loans and advances to third party financial institutions",
        "description": "Each period the schedule to support the roll-forward schedule of loans and advances to third party financial institutions is prepared by [an individual in the accounting department] and the reconciliation of the schedule to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCT018",
        "name": "Preparation of roll-forward of reverse repurchase agreements with third party financial institutions",
        "description": "Each period [name], who is independent of those processing transactions in the area of [ ], prepares [the schedule, which reconciles what to what or shows what]. \n\nThis determines whether [what equals what]. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCT019",
        "name": "Management review of roll-forward of reverse repurchase agreements with third party financial institutions",
        "description": "Each period the schedule to support the roll-forward schedule of reverse repurchase agreements with third parties is prepared by [an individual in the accounting department] and the reconciliation of the schedule to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBTWCGW012",
        "id": "GBCT020",
        "name": "Review of reconciliation of third party financial institutions statements to GL",
        "description": "Each period the reconciliation of the borrowings statement(s) from the third party financial institution(s) to  the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBTWCGW013",
        "id": "GBCT021",
        "name": "Preparation of reconciliation of clearing accounts with other banks",
        "description": "Each period, [name] reconciles the clearing account detail/statements to the general ledger.  \n\nThis preparer is independent of those in the [Item Processing department]. "
    },
    {
        "riskId": "GBTWCGW013",
        "id": "GBCT023",
        "name": "Reconciliation of total amount received and paid to central banks to the correspondent bank balances and required deposits at central banks",
        "description": "Each period, [name] reconciles the total amount of funds received from central banks to the correspondent account balances and required deposits at central banks.\n\nThis preparer is independent of those who process the correspondent bank transactions and transactions with central banks. "
    },
    {
        "riskId": "GBTWCGW013",
        "id": "GBCT022",
        "name": "Review of reconciliation of clearing accounts with other banks",
        "description": "Each period the reconciliation of the  general ledger to the clearing account detail/statements is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBTWCGW013",
        "id": "GBCT024",
        "name": "Review of reconciliation of total amount received and paid to central banks to the correspondent bank balances and required deposits at central banks",
        "description": "Each period the reconciliation of the  correspondent account balances and required deposits at central banks to the total amount of funds received from central banks is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBTWCGW014",
        "id": "",
        "name": "",
        "description": ""
    },
    {
        "riskId": "WCGW44.1",
        "id": "",
        "name": "",
        "description": ""
    },
    {
        "riskId": "GBIWCGW001",
        "id": "GBCI003",
        "name": "Management review of investment transactions report",
        "description": "Each period [the manager] reviews the system-generated report of investment purchases, sales, and maturities.\n\nThe review considers the investment transactions report.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBIWCGW001",
        "id": "GBCI006",
        "name": "Review of investments sub-ledger data input\n",
        "description": "Objective: Investments data is input correctly into the system.\n\nEach period [the reviewer] reviews the investments data input into the [investments sub-ledger] including details such as [cost, initial premium/ discount, par value, interest rate, CUSIP/ security identifier and description] and compares the information to the [trade ticket].\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBIWCGW001",
        "id": "GBCI004",
        "name": "Approval of investment transactions and review of classification of investments\n",
        "description": "Objective: Investments transactions are properly approved, classified and recorded in accordance with the entity's policies.\n\n[The reviewer] reviews each investment transaction. \n\nThis involves assessing whether : \n• the transaction is accurately recorded, including [relevant details reviewed]; and\n• for the acquisitions, the classification of the investment is appropriate and consistent with the entity's accounting policy. \n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer indicates their approval by [document how approval of the item is indicated].]\n"
    },
    {
        "riskId": "GBIWCGW001",
        "id": "GBCI007",
        "name": "Sub-ledger to GL reconciliation preparation - investments (automated)",
        "description": "The investment sub-ledger is configured in such a way as to automatically generate a reconciliation between the investment sub-ledger and general ledger at intervals specified by the entity. \n\nThis is achieved by the investment sub-ledger accounts being properly mapped to the applicable general ledger accounts and the system performing a comparison of the two amounts and generating a list of differences. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBIWCGW001",
        "id": "GBCI008",
        "name": "Sub-ledger to GL reconciliation preparation - investments (manual)",
        "description": "Each period, the investment sub-ledger is reconciled to the general ledger by [name] who is independent of those processing  [relevant process] transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written off, following authorization by [the name].\n\nAmounts to be followed up in the following period do not exceed [amount] individually or [amount] in  the aggregate. \n\nThis control determines whether the data in the general ledger matches the investment subledger but does not provide any assurance over the data in the [sub ledger]."
    },
    {
        "riskId": "GBIWCGW001",
        "id": "GBCI009",
        "name": "Sub-ledger to GL reconciliation review - investments",
        "description": "Each period the reconciliation of the investment sub-ledger to the general ledger is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nThis control determines whether the data in the general ledger matches the investment sub-ledger but does not provide any assurance over the data in the sub-ledger. "
    },
    {
        "riskId": "GBIWCGW001",
        "id": "GBCI010",
        "name": "Preparation of reconciliation of investments to custodian statements",
        "description": "Each period [the name] reconciles the investment statements from the investment custodian to the investment subledger and general ledger.  \n\nThis preparer is independent of those initiating or carrying out investment transactions"
    },
    {
        "riskId": "GBIWCGW001",
        "id": "GBCI012",
        "name": "Reconciliation of actual cash settlements to expected settlements on investment transactions",
        "description": "Each period [the name] reconciles the  actual cash settlements upon investment transactions clearing to the expected amount of cash to be received or paid.\n\nThis preparer is independent of those initiating or carrying out investment transactions and of those reconciling the bank accounts. "
    },
    {
        "riskId": "GBIWCGW001",
        "id": "GBCI011",
        "name": "Review of reconciliation of investments to custodian statements",
        "description": "Each period the reconciliation of the investment subledger and general ledger to the investment statements is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBIWCGW001",
        "id": "GBCI005",
        "name": "System access rights - investment transactions",
        "description": "The [investment subledger] is configured in such a way as to prevent unauthorized users from initiating investment transactions. \n\nThis is achieved by setting individuals' investment transaction authority limits within the [investment subledger] and not allowing unauthorized users to make transactions. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBIWCGW002",
        "id": "GBCI003",
        "name": "Management review of investment transactions report",
        "description": "Each period [the manager] reviews the system-generated report of investment purchases, sales, and maturities.\n\nThe review considers the investment transactions report.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBIWCGW002",
        "id": "GBCI014",
        "name": "Management review of gains and losses from sales of investments",
        "description": "Each period [the manager] reviews the gains and losses from sales of investments.  \n\nThe review considers the gains and losses from sales of investments.  \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBIWCGW002",
        "id": "GBCI013",
        "name": "System configuration for calculation of net realized gains and losses from disposal of investments",
        "description": "The [name of system] is configured in such a way as to [prevent/ ensure that] [details of procedure which is prevented/ enforced ]. \n\nThis is achieved by [details of how achieved]. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBIWCGW003",
        "id": "GBCI015",
        "name": "System configuration for investment income calculations\n",
        "description": "Objective: The investments system calculates and accrues investment income correctly.\n\nThe investments system is configured in such a way as to ensure that: \n• the income from investments is calculated and accrued accurately based on the details of the instrument entered on the system and/or the data from third parties (e.g. dividend payments or interest rates), if applicable. \n• the amortization or accretion of premiums and discounts is correctly calculated and recorded.\n• the calculation of realized gains and losses on disposal of investments.\n• the calculation of unrealized gains and losses on subsequent valuation of investments.\n\nThis is achieved by loading the approved transaction information into the system and subsequently the system records an automatic entry to interest income on securities and realized/ unrealized gains or losses. "
    },
    {
        "riskId": "GBIWCGW003",
        "id": "GBCI016",
        "name": "Management review of investment income",
        "description": "Each period [the manager] reviews the investment income. \n\nThe review considers the [items checked by review ]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBIWCGW003",
        "id": "GBCI025",
        "name": "Approval of fair value model, valuation policy and methodologies\n",
        "description": "Objective: The models and methodology for the valuation of investments are appropriately reviewed and updated. \n\n[The reviewer] reviews each valuation policy established for each class of security held or traded by the entity and the fair value model used in measuring values for securities that do not have quoted prices in an active market (Level 2 or 3 securities).\n\nThis involves: \n • reviewing the [methodology and model for valuing each type of security, pricing service used and valuation specialists used]; \n • assessing whether policies and procedures are appropriate for each class of security; and\n • the assumptions and data inputs in the model are appropriately developed and applied.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer indicates their approval by [document how approval of the item is indicated].]"
    },
    {
        "riskId": "GBIWCGW003",
        "id": "GB176",
        "name": "System configuration - interest income calculations",
        "description": "The loan, cash, and investment ledger is configured in such a way as to calculate the amount of interest income to recognize based on the outstanding balances of interest earning assets and interest rate data entered into the system upon the issuance of the debt or borrowings.\n\nThis is achieved by loading the interest rate into the system. For variable rate assets, both the variable index and the reset date are input into the system. Subsequently the system will record a daily entry to interest expense and accrued interest expense until the debt or borrowing balance has been repaid.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBIWCGW004",
        "id": "GBCI006",
        "name": "Review of investments sub-ledger data input\n",
        "description": "Objective: Investments data is input correctly into the system.\n\nEach period [the reviewer] reviews the investments data input into the [investments sub-ledger] including details such as [cost, initial premium/ discount, par value, interest rate, CUSIP/ security identifier and description] and compares the information to the [trade ticket].\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBIWCGW004",
        "id": "GBCI015",
        "name": "System configuration for investment income calculations\n",
        "description": "Objective: The investments system calculates and accrues investment income correctly.\n\nThe investments system is configured in such a way as to ensure that: \n• the income from investments is calculated and accrued accurately based on the details of the instrument entered on the system and/or the data from third parties (e.g. dividend payments or interest rates), if applicable. \n• the amortization or accretion of premiums and discounts is correctly calculated and recorded.\n• the calculation of realized gains and losses on disposal of investments.\n• the calculation of unrealized gains and losses on subsequent valuation of investments.\n\nThis is achieved by loading the approved transaction information into the system and subsequently the system records an automatic entry to interest income on securities and realized/ unrealized gains or losses. "
    },
    {
        "riskId": "GBIWCGW004",
        "id": "GBCI017",
        "name": "Management review of interest margin",
        "description": "Each period [the manager] reviews the following KPI(s): \n - interest margin calculation\n\nThe reviewer considers changes in the general interest rate environment; knowledge of interest rates paid and received from [investments, deposits, and loan products]; and comparisons to similar financial institutions. \n\nWhere [the reviewer] has further questions or wishes to understand reasons for the fluctuations in the KPIs, these are raised first with the appropriate manager, who provides more detailed information where applicable. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBIWCGW004",
        "id": "GBCI018",
        "name": "System configuration for calculation of average balances",
        "description": "The [system] is configured in such a way as to calculate average balances for use in financial reporting. \n\nThis is achieved by inputting the formulas into the [system] for calculation. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBIWCGW005",
        "id": "GBCI010",
        "name": "Preparation of reconciliation of investments to custodian statements",
        "description": "Each period [the name] reconciles the investment statements from the investment custodian to the investment subledger and general ledger.  \n\nThis preparer is independent of those initiating or carrying out investment transactions"
    },
    {
        "riskId": "GBIWCGW005",
        "id": "GBCI011",
        "name": "Review of reconciliation of investments to custodian statements",
        "description": "Each period the reconciliation of the investment subledger and general ledger to the investment statements is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBIWCGW005",
        "id": "GBCI015",
        "name": "System configuration for investment income calculations\n",
        "description": "Objective: The investments system calculates and accrues investment income correctly.\n\nThe investments system is configured in such a way as to ensure that: \n• the income from investments is calculated and accrued accurately based on the details of the instrument entered on the system and/or the data from third parties (e.g. dividend payments or interest rates), if applicable. \n• the amortization or accretion of premiums and discounts is correctly calculated and recorded.\n• the calculation of realized gains and losses on disposal of investments.\n• the calculation of unrealized gains and losses on subsequent valuation of investments.\n\nThis is achieved by loading the approved transaction information into the system and subsequently the system records an automatic entry to interest income on securities and realized/ unrealized gains or losses. "
    },
    {
        "riskId": "GBIWCGW005",
        "id": "GBCI019",
        "name": "Review of reconciliation of derivatives between counterparties and GL",
        "description": "Each period the reconciliation of the general ledger [and/or appropriate subledger where derivatives activity is tracked] to  the counterparty derivative statements [or automated derivative feeds from counterparties] is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBIWCGW005",
        "id": "GBCI020",
        "name": "Preparation of reconciliation of derivatives between counterparties and GL",
        "description": "Each period [the name] reconciles the  counterparty derivative statements [or automated derivative feeds from counterparties] to  the general ledger [and/ or appropriate subledger where derivatives activity is tracked].  \n\nThis preparer is independent of those  who authorize or record derivative transactions "
    },
    {
        "riskId": "GBIWCGW005",
        "id": "GBCI041",
        "name": "Preparation of bank/ nostro reconciliation",
        "description": "A bank/ nostro reconciliation is prepared periodically by [the name] who is independent of the person processing cash transactions.\n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written off, following approval by [reviewer].\n\nAmounts to be followed up in the following period do not exceed [amount] individually and [amount] in aggregate (gross).\n"
    },
    {
        "riskId": "GBIWCGW005",
        "id": "GBCI042",
        "name": "Management review of bank/ nostro reconciliation",
        "description": "Each period [the name] reviews the bank/ nostro reconciliation. In order to perform the review, the reviewer performs the following procedures.\n\nThe review considers [list considerations].\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n"
    },
    {
        "riskId": "GBIWCGW006",
        "id": "GBCI021",
        "name": "Management review of significant changes in pricing and the valuation of hard-to-value securities\n",
        "description": "Objective: Significant changes in pricing and the valuation of hard-to-value securities are appropriately reviewed and recorded.\n\nLevel 1 securities (for which the pricing information can be obtained from an active market):\n\nEach period [the reviewer] reviews significant changes in pricing from period to period for the securities by examining the schedule of prices obtained from the external pricing source.\n\nLevel 2 and 3 securities (hard-to-value, illiquid or restricted securities): \n\nEach period [the reviewer] reviews the appropriateness of\n- any adjustments to the methodology or models used for valuing the securities; and\n- the assumptions and data inputs to the models. \nand assesses the reasonableness of resulting changes in value.  \n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBIWCGW006",
        "id": "GBCI023",
        "name": "Pricing committee review of changes in pricing sources",
        "description": "Each period [the manager] reviews the listing of securities where the entity has changed external pricing sources between periods.\n\nThe review considers the listing of securities where the entity has changed external pricing sources between periods.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBIWCGW006",
        "id": "GBCI022",
        "name": "Pricing committee review of external pricing source overrides",
        "description": "Each period [the manager] reviews the listing of securities where an external pricing source was overridden in favor of an internal pricing calculation.\n\nThe review considers the listing of securities where an external pricing source was overridden in favor of an internal pricing calculation.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBIWCGW006",
        "id": "GBCI024",
        "name": "Management review of pricing calculations",
        "description": "Each period [the manager] reviews the investment pricing calculations.\n\nThe review considers the investment pricing calculations.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBIWCGW006",
        "id": "GBCI026",
        "name": "Management review of third party investment valuations",
        "description": "Objective: Third party investment valuations are reviewed by management.\n\nEach period [the reviewer] reviews third party investment valuations.\n\nIn order to evaluate the reasonableness of the valuation, the reviewer performs the following procedures:\n• reviewing the processes used by pricing vendors in valuing securities, the expertise of the individuals and their assumptions or factors; \n• [analyzing the expected future cash flow of the securities]; \n• [comparing prices within a portfolio of securities to each other to make sure that they are consistent among similar securities]; \n• [using more than one model to corroborate the results from each model]; or \n• [evaluating movements in the prices for related hedging instruments and collateral]\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBIWCGW006",
        "id": "GBCI027",
        "name": "Investments impairment review",
        "description": "Objective: Impairment of investments is appropriately recognized and recorded.\n\nEach period [the reviewer] reviews the impairment from the list of investments.\n\nIn order to perform the review, the reviewer performs the following procedures:\n• reviewing whether the recognition of an impairment is appropriate according to the entity’s policy; and \n• reviewing whether the impairment amount is calculated correctly and recorded accurately.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBIWCGW006",
        "id": "GBCI025",
        "name": "Approval of fair value model, valuation policy and methodologies\n",
        "description": "Objective: The models and methodology for the valuation of investments are appropriately reviewed and updated. \n\n[The reviewer] reviews each valuation policy established for each class of security held or traded by the entity and the fair value model used in measuring values for securities that do not have quoted prices in an active market (Level 2 or 3 securities).\n\nThis involves: \n • reviewing the [methodology and model for valuing each type of security, pricing service used and valuation specialists used]; \n • assessing whether policies and procedures are appropriate for each class of security; and\n • the assumptions and data inputs in the model are appropriately developed and applied.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer indicates their approval by [document how approval of the item is indicated].]"
    },
    {
        "riskId": "GBIWCGW007",
        "id": "C551",
        "name": "Authorization of new and amended derivative agreements",
        "description": "All new and amended derivatives are reviewed and authorized by the [Board/ risk management committee/ management]. This review includes the following items: \n• an analysis of the business risks the derivative is expected to manage.\n• an analysis of the effectiveness of the derivative in hedging the business risk, the residual exposure once the derivative is in place and the extent to which the derivative is in line with the entity's risk management objectives.\n• the proposed method of accounting for the derivative\n• the credit-worthiness of the counter-party.\n• the rate in place in the derivative instrument [re-set dates, etc., as applicable].\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the item is authorized.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBIWCGW007",
        "id": "GBCI019",
        "name": "Review of reconciliation of derivatives between counterparties and GL",
        "description": "Each period the reconciliation of the general ledger [and/or appropriate subledger where derivatives activity is tracked] to  the counterparty derivative statements [or automated derivative feeds from counterparties] is reviewed by [name]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBIWCGW007",
        "id": "GBCI020",
        "name": "Preparation of reconciliation of derivatives between counterparties and GL",
        "description": "Each period [the name] reconciles the  counterparty derivative statements [or automated derivative feeds from counterparties] to  the general ledger [and/ or appropriate subledger where derivatives activity is tracked].  \n\nThis preparer is independent of those  who authorize or record derivative transactions "
    },
    {
        "riskId": "GBIWCGW008",
        "id": "GBCI028",
        "name": "Estimate preparation controls - fair value (manual)",
        "description": "( Estimate preparation controls )\n\nManagement has controls in place which address the points within the process at which a misstatement of the estimate could arise, as follows:\n\n[document the controls that management has over the preparation of the estimate, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used to develop the accounting estimate.\n• the review and approval of the assumptions and data inputs used in the development of the accounting estimate by the appropriate levels of management and, where appropriate, those charged with governance.\n• management's retrospective review of the outcome of accounting estimates made in prior periods.\n• consideration by appropriate levels of management of whether the accounting estimate is in accordance with the requirements of the applicable financial reporting framework. \n• the segregation of duties between those committing the entity to the underlying transactions and those responsible for making the accounting estimate.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]"
    },
    {
        "riskId": "GBIWCGW008",
        "id": "GBCI029",
        "name": "Estimate preparation controls - fair value (automated)",
        "description": "( Estimate preparation controls )\n\nManagement has controls in place which address the points within the process at which a misstatement of the estimate could arise, as follows:\n\n[document the controls that management has over the preparation of the estimate, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used to develop the accounting estimate.\n• the review and approval of the assumptions and data inputs used in the development of the accounting estimate by the appropriate levels of management and, where appropriate, those charged with governance.\n• management's retrospective review of the outcome of accounting estimates made in prior periods.\n• consideration by appropriate levels of management of whether the accounting estimate is in accordance with the requirements of the applicable financial reporting framework. \n• the segregation of duties between those committing the entity to the underlying transactions and those responsible for making the accounting estimate.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]"
    },
    {
        "riskId": "GBIWCGW008",
        "id": "GBC457",
        "name": "Security pricing master file report reconciliation",
        "description": "Each period, [name]  reconciles the security pricing master file report to the pricing reports received from independent pricing vendors\n\nThis preparer is independent of those who execute trades or perform the valuation of security prices"
    },
    {
        "riskId": "GBIWCGW008",
        "id": "GBC453",
        "name": "Exception/ edit report review - pricing",
        "description": "An exception report is produced each period which details pricing exceptions in the [pricing system/ sub-ledger] such as securities without a price, securities that were priced manually, securities with no price movements, securities where the age of pricing data exceeds a predetermined value or other exceptions]\n\nThis is reviewed by [name] who reviews the items in the report, and the reasons for their inclusion, including any supporting information.  \n\nThe reviewer also confirms that  the report is sequential to the previous report reviewed. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBIWCGW008",
        "id": "GBCI032",
        "name": "Estimate preparation controls - portfolio pricing non-exchange traded securities",
        "description": "( Estimate preparation controls )\n\nManagement has controls in place which address the points within the process at which a misstatement of the estimate could arise, as follows:\n\n[document the controls that management has over the preparation of the estimate, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used to develop the accounting estimate.\n• the review and approval of the assumptions and data inputs used in the development of the accounting estimate by the appropriate levels of management and, where appropriate, those charged with governance.\n• management's retrospective review of the outcome of accounting estimates made in prior periods.\n• consideration by appropriate levels of management of whether the accounting estimate is in accordance with the requirements of the applicable financial reporting framework. \n• the segregation of duties between those committing the entity to the underlying transactions and those responsible for making the accounting estimate.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]"
    },
    {
        "riskId": "GBIWCGW008",
        "id": "GBC456",
        "name": "Portfolio pricing reconciliation non-exchange traded securities",
        "description": "Each period, [name] reconciles the [non-exchange traded securities portfolio pricing report] to the fair value estimates determined by the [valuation committee]\n\nThis preparer is independent of those who perform the valuation of security prices"
    },
    {
        "riskId": "GBIWCGW008",
        "id": "GBC459",
        "name": "Valuation committee approval of valuation policy and methodologies",
        "description": "[The name] reviews and authorizes each valuation policy established for each class of security held or traded by the entity. This involves reviewing the [methodologies for valuing each type of security, pricing services used, and valuation specialists used] and assessing whether [factors reviewed/ approved]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm their authorization by [document how authorized].]\n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBIWCGW008",
        "id": "GBC458",
        "name": "System configuration for significant price movement report",
        "description": "The [trading / pricing system] is configured in such a way as to produce a report detailing significant price movements from the previous [period]\n\nThis is achieved by the use of price change thresholds programmed into the [trading / pricing] system\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBIWCGW008",
        "id": "GBC454",
        "name": "Management review of significant price movement report",
        "description": "Each period [the manager] reviews the [significant price movement report].\n\nThe review considers the securities identified by the report as having experienced price movements above the thresholds established by the entity for manual review.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBIWCGW008",
        "id": "GBC451",
        "name": "Board review of manually priced securities",
        "description": "The [board] reviews each manually priced security at  the periodic board meeting. \n\nThe board is provided with supporting documentation, which has been reconciled to  the valuation of the manually priced securities.\n\nIf further review is deemed necessary, the board asks for clarification  or additional information and any decisions are deferred until the next meeting. \n\nEvidence of the board's approval is indicated in the minutes. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBIWCGW008",
        "id": "GBC459.1",
        "name": "Valuation committee review of hard to value securities valuation",
        "description": "Each period [the manager] reviews the valuation methodologies and inputs for securities that are [hard to value, illiquid, or restricted]\n\nThe review considers the hard to value securities valuation\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBIWCGW008",
        "id": "GBC452",
        "name": "Due diligence review of pricing vendors",
        "description": "Each period [the manager] reviews the processes used by pricing vendors in valuing securities, the expertise of the individuals, and [other factors].\n\nThe review considers the pricing vendors used by the entity.\n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBIWCGW008",
        "id": "GBC455",
        "name": "Performance review of internal  valuation specialists",
        "description": "Each period [the manager] reviews the performance of internal valuation specialists. \n\nThe review considers the processes used by internal valuation specialists in valuing securities, the expertise of the individuals, errors identified in internal valuations, and [other factors].  \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm that their review is complete by [document how confirmed].]\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBIWCGW008",
        "id": "GBC150",
        "name": "Portfolio pricing estimate  non-exchange traded securities",
        "description": "( Estimate preparation controls )\n\nManagement has controls in place which address the points within the process at which a misstatement of the estimate could arise, as follows:\n\n[document the controls that management has over the preparation of the estimate, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used to develop the accounting estimate.\n• the review and approval of the assumptions and data inputs used in the development of the accounting estimate by the appropriate levels of management and, where appropriate, those charged with governance.\n• management's retrospective review of the outcome of accounting estimates made in prior periods.\n• consideration by appropriate levels of management of whether the accounting estimate is in accordance with the requirements of the applicable financial reporting framework. \n• the segregation of duties between those committing the entity to the underlying transactions and those responsible for making the accounting estimate.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]"
    },
    {
        "riskId": "GBIWCGW010",
        "id": "GBCI027",
        "name": "Investments impairment review",
        "description": "Objective: Impairment of investments is appropriately recognized and recorded.\n\nEach period [the reviewer] reviews the impairment from the list of investments.\n\nIn order to perform the review, the reviewer performs the following procedures:\n• reviewing whether the recognition of an impairment is appropriate according to the entity’s policy; and \n• reviewing whether the impairment amount is calculated correctly and recorded accurately.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer confirms that their review is complete by [document how confirmed].]"
    },
    {
        "riskId": "GBIWCGW010",
        "id": "GBCI025",
        "name": "Approval of fair value model, valuation policy and methodologies\n",
        "description": "Objective: The models and methodology for the valuation of investments are appropriately reviewed and updated. \n\n[The reviewer] reviews each valuation policy established for each class of security held or traded by the entity and the fair value model used in measuring values for securities that do not have quoted prices in an active market (Level 2 or 3 securities).\n\nThis involves: \n • reviewing the [methodology and model for valuing each type of security, pricing service used and valuation specialists used]; \n • assessing whether policies and procedures are appropriate for each class of security; and\n • the assumptions and data inputs in the model are appropriately developed and applied.\n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer indicates their approval by [document how approval of the item is indicated].]"
    },
    {
        "riskId": "GBWCGW021",
        "id": "GBCI004",
        "name": "Approval of investment transactions and review of classification of investments\n",
        "description": "Objective: Investments transactions are properly approved, classified and recorded in accordance with the entity's policies.\n\n[The reviewer] reviews each investment transaction. \n\nThis involves assessing whether : \n• the transaction is accurately recorded, including [relevant details reviewed]; and\n• for the acquisitions, the classification of the investment is appropriate and consistent with the entity's accounting policy. \n\n[Once the review has been performed and any queries raised or changes requested have been dealt with to the reviewer’s satisfaction, the reviewer indicates their approval by [document how approval of the item is indicated].]\n"
    },
    {
        "riskId": "GBDEWCGW01",
        "id": "C551",
        "name": "Authorization of new and amended derivative agreements",
        "description": "All new and amended derivatives are reviewed and authorized by the [Board/ risk management committee/ management]. This review includes the following items: \n• an analysis of the business risks the derivative is expected to manage.\n• an analysis of the effectiveness of the derivative in hedging the business risk, the residual exposure once the derivative is in place and the extent to which the derivative is in line with the entity's risk management objectives.\n• the proposed method of accounting for the derivative\n• the credit-worthiness of the counter-party.\n• the rate in place in the derivative instrument [re-set dates, etc., as applicable].\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the item is authorized.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW01",
        "id": "INBC128",
        "name": "Board approval of derivative policy",
        "description": "The [Board] reviews each policy established by management over the use of derivative instruments and acceptable counterparties at the annual policy review board meeting. \n\nThe Board is provided with supporting documentation, which has been reconciled to  the specific derivative practices in place at the company, the lists of counterparties used or approved to be used by management, and the  actual derivative exposure as compared to the approval limits previously established by the board or management.\n\nIf further review is deemed necessary, the Board asks for clarification  or additional information and any decisions are deferred until the next meeting. \n\nEvidence of the Board's approval is indicated in the minutes. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW01",
        "id": "INBC131",
        "name": "Derivative transaction approval",
        "description": "When a derivative transaction is entered into the system, it is automatically placed into a work  queue for the [derivative risk management or portfolio manager] to review.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is approved.]]\n\nManagement has designed this control to prevent potential misstatements both intentional and unintentional greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW01",
        "id": "INBC129",
        "name": "Collateral requirements for derivative instruments",
        "description": "[The name] reviews and authorizes each derivative transaction entered into during the [period]This involves  reviewing the derivative agreement terms, the entity's counterparty approval policies, and the entity's risk management and derivative policiesand assessing  whether [factors  reviewed/approved]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm their authorization by [document how authorized].]\n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW02",
        "id": "INBC126",
        "name": "Management review of legal agreements to identify derivatives",
        "description": "[The manager] reviews the accounting treatment of each transaction whose terms may contain a derivative contract or embedded derivative.\n\nThis analysis involves reviewing the underlying legal agreement or contract, documentation of the entity's proposed accounting treatment, and comparing the terms with the applicable accounting standards for derivative instruments and analysing the facts in light of the applicable  accounting framework. \n\nWhere the facts match an existing scenario from the entity's accounting manual, the manager assesses whether the item is accounted for in accordance with  this policy. \n\nWhere the facts have not been anticipated by the existing accounting manual, the [manager] reviews the analysis of the particular circumstances and recommended accounting treatment. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.] \n\nManagement has designed this control to prevent potential unintentional misstatements greater than [amount].\n"
    },
    {
        "riskId": "GBDEWCGW02",
        "id": "INBC127",
        "name": "Verification of derivative terms",
        "description": "Each period [name] reconciles the derivative terms entered into the [derivative accounting system] to the derivative confirmation received from the counterparty.  The reviewer identifies whether the terms of the derivative match those entered into the [system].  \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]\n\nThis preparer is independent of those who approve the derivative transaction and those responsible for entering the derivative terms into the [system].\n\n"
    },
    {
        "riskId": "GBDEWCGW03",
        "id": "INBC133",
        "name": "Accounting review - derivatives designated as hedges",
        "description": "[The manager] reviews the accounting treatment of each derivative transaction entered into that has been designated as a hedge of an identified risk.\n\nThis analysis involves reviewing the derivative confirmation received from the counterparty, the entity's hedge designation documentation, [the prospective hedge effectiveness assessment, proposed retrospective hedge effectiveness test,] and other documentation of the entity's proposed accounting treatment and analysing the facts in light of the applicable  accounting framework. \n\nWhere the facts match an existing scenario from the entity's accounting manual, the manager assesses whether the item is accounted for in accordance with this policy. \n\nWhere the facts have not been anticipated by the existing accounting manual, the [manager] reviews the analysis of the particular circumstances and recommended accounting treatment. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]]\n\nManagement has designed this control to prevent potential unintentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW04",
        "id": "INBC134",
        "name": "Management review of hedge effectiveness assessment",
        "description": "Each period [the manager] reviews the [retrospective and] prospective hedge effectiveness assessment perfomed by the entity for each hedge relationship in place during the previous [period].\n\nThe analysis is reviewed  in accordance with the internal requirements for hedge effectiveness and the relevant requirements of accounting standards.\n\nThe review considers the data [underlying the hedge effectiveness calculations, ]and the assumptions used in preparing the hedge effectiveness assessment.  The reviewer considers [the mathematical accuracy of the underlying computations as well as ]the appropriateness and consistency of the effectiveness assessment approach.  The reviewer also makes an independent determination of whether the hedge designation should continue, or whether the hedge must be discontinued because it no longer is effective.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW05",
        "id": "INBC135",
        "name": "Accounting review - discontinued hedge relationships",
        "description": "[The manager] reviews the accounting treatment of each hedge relationship that has been discontinued [entirely][ or] [partially] when it ceases to meet the qualifying criteria [after considering the rebalancing of the hedging relationship (if applicable)].\n\nThis analysis involves reviewing the date at which the hedge relationship was discontinued, the entity's accounting treatment for changes in the fair value of the derivative after the discontinuation date, the subsequent treatment of changes recorded to the carrying amount of hedged items (fair value hedges only), subsequent treatment of amounts recorded in equity during the hedge relationship (cash flow hedges only) and analysing the facts in light of the applicable accounting framework. \n\nWhere the facts match an existing scenario from the entity's accounting manual, the manager assesses whether the item is accounted for in accordance with this policy. \n\nWhere the facts have not been anticipated by the existing accounting manual, the [manager] reviews the analysis of the particular circumstances and recommended accounting treatment. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]]\n\nManagement has designed this control to prevent potential unintentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW06",
        "id": "C558",
        "name": "Review of reconciliation of derivatives from GL to counterparty statements",
        "description": "Each period [the manager] reviews the reconciliation of [the schedule of derivatives] to the statements provided by the entity's counterparties and to the general ledger]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements both intentional and unintentional greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW06",
        "id": "C559",
        "name": "Preparation of reconciliation of derivatives from GL to counterparty statements",
        "description": "Each period [name], who is independent of those processing derivatives transactions, prepares the reconciliation of [the schedule of derivatives] to the statements provided by the entity's counterparties and to the general ledger]. \n\nThis determines whether the general ledger reconciles to the statements from the entity's counterparties.\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW06",
        "id": "INBC130",
        "name": "KPI review - derivative income, expense, receipt and payment activity",
        "description": "Each period key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information.\n\nKPIs include: \n- derivative income and expense\n- cash payments under derivative contracts\n- cash receipts under derivative contracts\n\nThe reviewer  considers the total notional amount of each type of derivative transaction, changes in the underlyings that affect derivative fair value or cash payments and receipts, new derivative transactions entered into during the period, and changes in hedge designations during the period.\n\nWhere [the reviewer] has further questions or wishes to understand reasons for the fluctuations in the KPIs, these are raised first with the appropriate manager, who provides more detailed information where applicable. \n\nOnce the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction,  they [document how the reviewer indicates that the review is complete.] \n\nManagement has designed this control to detect and correct potential misstatements greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW06",
        "id": "INBC141",
        "name": "System configuration for derivative accruals and payments",
        "description": "The [derivative processing system] is configured in such a way as to ensure that derivative cash payment and receipt accruals are properly calculated, and cash payments authorized properly match the accruals.\n\nThis is achieved by the use of preselected calculation routines that cannot be manually overridden, edit checks, and automatic interaction with the [payment processing system] used to initiate cash transfers related to derivatives.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount].\n"
    },
    {
        "riskId": "GBDEWCGW07",
        "id": "INBC138",
        "name": "Due diligence review of derivative pricing vendors",
        "description": "Each period [the manager] reviews the processes used by  vendors in valuing derivative instruments, the expertise of the individuals, and [other factors].\n\nThe review considers the pricing vendors used by the entity.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete].] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW07",
        "id": "INBC139",
        "name": "Management review of procedures performed by internal derivative valuation experts",
        "description": "Each period [the manager] reviews the procedures performed by internal valuation experts.\n\nThe review considers the processes used by internal valuation experts in valuing derivative instruments, the expertise of the individuals, errors identified in internal valuations, and [other factors].\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete].] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW08",
        "id": "INBC140",
        "name": "Disclosure review - derivatives",
        "description": "Management has policies and procedures to help reduce the potential risks over the preparation of the disclosure as follows: \n\n[document management’s policies and procedures in place over:\n• using qualified and experienced personnel, including management's experts.\n• consideration by appropriate levels of management of whether the accounting disclosures are consistent with the operational plans of the entity.\n• the completeness, accuracy and validity of the underlying data used in the preparation of the  disclosure. \n\nWhere the disclosure includes subjective elements, document management's policies and procedures in place over: \n• review and approval of the relevant factors and the development of assumptions by higher levels of management.\n• the periodic review of the methods of developing the factors and assumptions.\n• a comparison of the disclosures made in prior periods with the actual results.]"
    },
    {
        "riskId": "GBDEWCGW09",
        "id": "C558",
        "name": "Review of reconciliation of derivatives from GL to counterparty statements",
        "description": "Each period [the manager] reviews the reconciliation of [the schedule of derivatives] to the statements provided by the entity's counterparties and to the general ledger]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements both intentional and unintentional greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW09",
        "id": "C559",
        "name": "Preparation of reconciliation of derivatives from GL to counterparty statements",
        "description": "Each period [name], who is independent of those processing derivatives transactions, prepares the reconciliation of [the schedule of derivatives] to the statements provided by the entity's counterparties and to the general ledger]. \n\nThis determines whether the general ledger reconciles to the statements from the entity's counterparties.\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW09",
        "id": "INBC112",
        "name": "Review of reconciliation of cash accounts",
        "description": "Each period the reconciliation of the cash account balances to the cash activity and balance reports received from the [bank or custodian] is reviewed by [name]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] "
    },
    {
        "riskId": "GBDEWCGW10",
        "id": "C558",
        "name": "Review of reconciliation of derivatives from GL to counterparty statements",
        "description": "Each period [the manager] reviews the reconciliation of [the schedule of derivatives] to the statements provided by the entity's counterparties and to the general ledger]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements both intentional and unintentional greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW10",
        "id": "C559",
        "name": "Preparation of reconciliation of derivatives from GL to counterparty statements",
        "description": "Each period [name], who is independent of those processing derivatives transactions, prepares the reconciliation of [the schedule of derivatives] to the statements provided by the entity's counterparties and to the general ledger]. \n\nThis determines whether the general ledger reconciles to the statements from the entity's counterparties.\n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW11",
        "id": "INBC136",
        "name": "Segregation of duties - derivatives (manual)",
        "description": "Management segregates the following activities: \n[list activities that are segregated] \n\n[Name] reviews each employee's responsibilities to ensure that they do not perform any inappropriate combination of these activities. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "GBDEWCGW11",
        "id": "INBC137",
        "name": "Segregation of duties - derivatives (automated)",
        "description": "The system prevents inappropriate access to the derivative process by segregating the following activities:\n- initiation of derivative transactions\n- cash payments made in connection with derivatives\n- processing of transactions\n- analysis of initial accounting treatment\n[- entry of data into hedge effectiveness calculations]\n- recording of derivative accounting entries \n\nIndividuals cannot access any combination  of above duties that is inappropriate.\n\nThe control operates continuously\n\nManagement has designed this control to prevent intentional potential misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW20",
        "id": "C287",
        "name": "Management review of payment file or cheque run",
        "description": "[The name] reviews and authorizes each [electronic funds transfer payment/ cheque run]. This involves reviewing the [electronic funds transfer file/ cheques] and assessing whether [factors reviewed/ approved]. \n\n[Once the review is complete and the queries raised have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW20",
        "id": "C317",
        "name": "3 way match - purchases (manual)",
        "description": "For each receipt of a purchase invoice, the details of the invoice are manually compared with the corresponding details from the related purchase order form and, where applicable,  the goods received note. \n\nIf the details agree, or the difference does not exceed more than [amount or %], the invoice is manually approved for payment. \n\nIf the details do not agree, the invoice is [document how items are flagged for follow-up.] \n\nAn accounts payable clerk, who does not have conflicting duties, follows up those items flagged for follow-up. \n\nInvoices are not paid until they have been matched or [identified as cleared by [name]]."
    },
    {
        "riskId": "WCGW21",
        "id": "C294",
        "name": "Review of reconciliation of accounts payable to supplier statements",
        "description": "Each period the reconciliation of the accounts payable ledger for a number of suppliers [(selected on a rotational policy, with the largest suppliers being selected each period)] to  the  statements provided by those suppliers is reviewed by [name].\n \n[Once the review is complete and the queries raised/changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review  is complete.]]"
    },
    {
        "riskId": "WCGW21",
        "id": "C326",
        "name": "Preparation of reconciliation of accounts payable to supplier statements",
        "description": "Each period, [name] reconciles the accounts payable ledger to the supplier statements for [the [x] largest suppliers and for others in rotation].\n\nAll differences greater than [amount] are followed up by the preparer and are either:\n - investigated and cleared before the reconciliation is finalized.\n - marked as to be followed up during the following period.\n\nThis preparer is independent of those [in the area of]."
    },
    {
        "riskId": "WCGW21",
        "id": "C317",
        "name": "3 way match - purchases (manual)",
        "description": "For each receipt of a purchase invoice, the details of the invoice are manually compared with the corresponding details from the related purchase order form and, where applicable,  the goods received note. \n\nIf the details agree, or the difference does not exceed more than [amount or %], the invoice is manually approved for payment. \n\nIf the details do not agree, the invoice is [document how items are flagged for follow-up.] \n\nAn accounts payable clerk, who does not have conflicting duties, follows up those items flagged for follow-up. \n\nInvoices are not paid until they have been matched or [identified as cleared by [name]]."
    },
    {
        "riskId": "WCGW21",
        "id": "C412",
        "name": "Management review of accrued expenses and prepayments schedules",
        "description": "Each period [the manager] reviews the schedule of accrued expenses, which gives details of [amounts due, supplier, payment dates, etc.].\n\nThe review considers the [items checked by review]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction,  they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW22",
        "id": "C244",
        "name": "Department head KPI review - expenses",
        "description": "Each period key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information. \n\nKPIs include: \n[List KPIs reviewed by the manager of the relevant department, such as:\n• all costs related to their department.\n• material variances from period to period.\n• material variances to budget.] \n\nThe reviewer identifies queries on KPIs regarding variances to expectation, such as fluctuations, outliers or unusual adjustments. The queries are raised with the appropriate person, who provides more detailed information where applicable.  \n\nAll queries are appropriately addressed [, and the reviewer evidences the completion of their review by signing the schedule of KPIs, indicating approval of the recorded amounts.]\n\nManagement has designed this control to detect and correct potential misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW22",
        "id": "C412",
        "name": "Management review of accrued expenses and prepayments schedules",
        "description": "Each period [the manager] reviews the schedule of accrued expenses, which gives details of [amounts due, supplier, payment dates, etc.].\n\nThe review considers the [items checked by review]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction,  they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW22",
        "id": "C471",
        "name": "Preparation of a goods received note",
        "description": "Objective:  A goods received note (GRN) is prepared for all goods received by the receiving staff that records details of the delivery and related order."
    },
    {
        "riskId": "WCGW22",
        "id": "C472",
        "name": "Goods received notes are recorded",
        "description": "Objective:  All goods received notes (GRNs) are recorded and are only recorded once.\n\nMANUAL WITH AN AUTOMATED COMPONENT\nEach period [the reviewer] reviews an exception report highlighting gaps or duplicates in the sequence of goods received notes (or other goods received documentation) in order to identify missing or duplicate goods received notes.  This review determines whether all goods received notes have been entered into the system once and only once. \n\n\nMANUAL\nOnce each period, [the reviewer] reviews the sequence of GRNs recorded in the system to identify any missing or duplicate GRNs and follows up on these items."
    },
    {
        "riskId": "WCGW217",
        "id": "C271",
        "name": "Management review of foreign exchange calculation",
        "description": "Each period the schedule to support the [foreign exchange calculation (which includes the amounts associated with assets and liabilities denominated in foreign currency and the income statement effect of the adjustment)] and the reconciliation of the schedule to the general ledger is reviewed by [name].\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW217",
        "id": "C408",
        "name": "Management review of system foreign exchange rates",
        "description": "Each period [the manager] reviews the schedule of foreign exchange rates used by the relevant system, which includes currency types, end-of-period exchange rates, and average exchange rates during the period.\n\nThe review considers the source of the exchange rates and the accuracy of their input into the system.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW217",
        "id": "C409",
        "name": "System configuration for foreign currencies",
        "description": "The [financial reporting system] is configured in such a way as to ensure that the correct foreign exchange rates are used to translate balances denominated in foreign currencies.\n\nThis is achieved by the system applying the rate identified as relevant to the balance at each period end.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW219",
        "id": "C244",
        "name": "Department head KPI review - expenses",
        "description": "Each period key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information. \n\nKPIs include: \n[List KPIs reviewed by the manager of the relevant department, such as:\n• all costs related to their department.\n• material variances from period to period.\n• material variances to budget.] \n\nThe reviewer identifies queries on KPIs regarding variances to expectation, such as fluctuations, outliers or unusual adjustments. The queries are raised with the appropriate person, who provides more detailed information where applicable.  \n\nAll queries are appropriately addressed [, and the reviewer evidences the completion of their review by signing the schedule of KPIs, indicating approval of the recorded amounts.]\n\nManagement has designed this control to detect and correct potential misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW219",
        "id": "C412",
        "name": "Management review of accrued expenses and prepayments schedules",
        "description": "Each period [the manager] reviews the schedule of accrued expenses, which gives details of [amounts due, supplier, payment dates, etc.].\n\nThe review considers the [items checked by review]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction,  they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW201",
        "id": "C316",
        "name": "Exception/ edit report review - changes to supplier data",
        "description": "An exception report is produced each period which details all changes made to the supplier data (i.e. new supplier added and changes to addresses, bank details, etc.) since the last report was run.\n\nThis is reviewed by [name] who reviews the items in the report, and the reasons for their inclusion, including any supporting information.  \n\nThe reviewer also confirms that  the report is sequential to the previous report reviewed. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW201",
        "id": "C215",
        "name": "Authorization of new suppliers and changes to supplier data",
        "description": "[The name] reviews and authorizes each [requested change to supplier data.  This includes changes to the address or bank details of the supplier as well as the addition of new supplier]. This involves reviewing the proposed change to the supplier data and assessing  whether the proposed change is supported by appropriate documentation such as new address or bank details sent by the supplier, or a signed new supplier authorization form.]\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is  approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW201",
        "id": "C411",
        "name": "Legal review of new and amended purchasing contracts",
        "description": "[The name] reviews and authorizes each new or amended purchasing contract.This involves  reviewing the contract detailsand assessing  whether it exposes the entity to any unacceptable risk. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm their authorization by [document how authorized].]\n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW202",
        "id": "C316",
        "name": "Exception/ edit report review - changes to supplier data",
        "description": "An exception report is produced each period which details all changes made to the supplier data (i.e. new supplier added and changes to addresses, bank details, etc.) since the last report was run.\n\nThis is reviewed by [name] who reviews the items in the report, and the reasons for their inclusion, including any supporting information.  \n\nThe reviewer also confirms that  the report is sequential to the previous report reviewed. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW204",
        "id": "C221",
        "name": "Authorization of purchase orders",
        "description": "[The name] reviews and authorizes each purchase order. This involves  reviewing the purchase order and assessing whether [it is supported by a purchase requisition form signed by someone with designated authority, or other appropriately authorized supporting documentation.\n\nThe reviewer also confirms that the purchase order is at the price agreed with the supplier and that the supplier is approved.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is  approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW204",
        "id": "C244",
        "name": "Department head KPI review - expenses",
        "description": "Each period key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information. \n\nKPIs include: \n[List KPIs reviewed by the manager of the relevant department, such as:\n• all costs related to their department.\n• material variances from period to period.\n• material variances to budget.] \n\nThe reviewer identifies queries on KPIs regarding variances to expectation, such as fluctuations, outliers or unusual adjustments. The queries are raised with the appropriate person, who provides more detailed information where applicable.  \n\nAll queries are appropriately addressed [, and the reviewer evidences the completion of their review by signing the schedule of KPIs, indicating approval of the recorded amounts.]\n\nManagement has designed this control to detect and correct potential misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW205",
        "id": "C344",
        "name": "Sequential numbering of purchase orders",
        "description": "Each period the [name] reviews an exception report highlighting gaps or duplicates in the sequence of purchase order numbers in order to identify missing or  duplicate records. \n\nThis review determines whether all  purchase orders have been entered into the system once and only once. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW584",
        "id": "",
        "name": "",
        "description": ""
    },
    {
        "riskId": "WCGW580",
        "id": "C960",
        "name": "Disclosure review - provisions",
        "description": "Management has controls in place to help reduce the potential risks over the preparation of the disclosures as follows:\n[document management’s controls over the preparation of the disclosure, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used in the preparation of the disclosures.\n• consideration by appropriate levels of management of whether the disclosures in the financial statements  are in accordance with the requirements of the applicable financial reporting framework.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]\n\n[Where the disclosures include subjective elements, document management’s controls relating to the review and approval of the assumptions and data inputs by the appropriate levels of management and, where appropriate, those charged with governance.]"
    },
    {
        "riskId": "WCGW560",
        "id": "C563",
        "name": "Segregation of duties - general",
        "description": "Management segregates the following activities: \n- [describe activities] \n\n[Name] reviews each employee's responsibilities to ensure that they do not perform any inappropriate combination of these activities. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW560",
        "id": "C564",
        "name": "System access - general",
        "description": "The [name of system] is configured in such a way as to support the segregation of duties required in the process.\n\nThis is achieved by [details of how achieved]. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW583",
        "id": "C953",
        "name": "Management review of litigation, claims and assessments",
        "description": "Each period [the manager] reviews a list of outstanding litigations, claims and assesments to identify items requiring provision/ reserve or disclosure as a contingent liability (or contingent asset).\n\nThe review considers the [items checked by review]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW583",
        "id": "C951",
        "name": "Board review of litigation, claims and assessments",
        "description": "The board reviews each  outstanding or potential litigation, claim or assessment [affecting the entity/ with a potential impact greater than [amount]] at the periodic board meeting. \n\nThe board is provided with supporting documentation, which has been reconciled to the amounts recorded in the general ledger [and the proposed disclosure in the financial statements.]\n\nIf further review is deemed necessary, the board asks for clarification  or additional information and any decisions are deferred until the next meeting. \n\nEvidence of the board's approval is indicated in the minutes. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW583",
        "id": "C509",
        "name": "Management review of confirmations received from relevant departments",
        "description": "[The name] reviews and authorizes each confirmation received from all relevant departments. This involves reviewing the confirmation and assessing whether [properties reviewed]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW585",
        "id": "C954",
        "name": "Estimate preparation controls - litigation, claims and assessments provision",
        "description": "( Estimate preparation controls )\n\nManagement has controls in place which address the points within the process at which a misstatement of the estimate could arise, as follows:\n\n[document the controls that management has over the preparation of the estimate, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used to develop the accounting estimate.\n• the review and approval of the assumptions and data inputs used in the development of the accounting estimate by the appropriate levels of management and, where appropriate, those charged with governance.\n• management's retrospective review of the outcome of accounting estimates made in prior periods.\n• consideration by appropriate levels of management of whether the accounting estimate is in accordance with the requirements of the applicable financial reporting framework. \n• the segregation of duties between those committing the entity to the underlying transactions and those responsible for making the accounting estimate.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]"
    },
    {
        "riskId": "WCGW581",
        "id": "C231",
        "name": "Estimate preparation controls - provisions",
        "description": "( Estimate preparation controls )\n\nManagement has controls in place which address the points within the process at which a misstatement of the estimate could arise, as follows:\n\n[document the controls that management has over the preparation of the estimate, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used to develop the accounting estimate.\n• the review and approval of the assumptions and data inputs used in the development of the accounting estimate by the appropriate levels of management and, where appropriate, those charged with governance.\n• management's retrospective review of the outcome of accounting estimates made in prior periods.\n• consideration by appropriate levels of management of whether the accounting estimate is in accordance with the requirements of the applicable financial reporting framework. \n• the segregation of duties between those committing the entity to the underlying transactions and those responsible for making the accounting estimate.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]"
    },
    {
        "riskId": "WCGW610",
        "id": "C269",
        "name": "Management review of PPE additions",
        "description": "Each period [the manager] reviews the schedule of property, plant and equipment additions from the PPE system.\n\nThe review considers the additions to confirm that the it is appropriate to capitalize the items and that the following are appropriate:\n- the details recorded for the asset are correct\n- the asset has been appropriately classified\n- the appropriate useful life and residual value has been identified and input for the asset\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW610",
        "id": "C258",
        "name": "Management review of depreciation expense",
        "description": "Each period [the manager] reviews the depreciation expense and supporting schedules and ensures the amount agrees to the general ledger.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW615",
        "id": "C216",
        "name": "Authorization of PPE disposals or retirements",
        "description": "[The name] reviews and authorizes each disposal or retirement request for an item of PPE. This involves reviewing the request and assessing whether: \n\n- the asset is no longer in use, has been replaced or is obsolete.\n- the proposed purchaser (if any) is credit worthy or that the sales terms require payment up front.\n- the proposed sales price (if applicable) is appropriate for the asset being disposed; and\n- if being retired, that this is the most appropriate method of disposing of the asset.\n\nThe reviewer also reviews the calculation of the gain/loss arising on disposal.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is  approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW616",
        "id": "C272",
        "name": "Management review of gains or losses on disposal",
        "description": "Each period the schedule to support the gains and losses on disposal of PPE and the reconciliation of the schedule to the general ledger is reviewed by [name]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW616",
        "id": "C216",
        "name": "Authorization of PPE disposals or retirements",
        "description": "[The name] reviews and authorizes each disposal or retirement request for an item of PPE. This involves reviewing the request and assessing whether: \n\n- the asset is no longer in use, has been replaced or is obsolete.\n- the proposed purchaser (if any) is credit worthy or that the sales terms require payment up front.\n- the proposed sales price (if applicable) is appropriate for the asset being disposed; and\n- if being retired, that this is the most appropriate method of disposing of the asset.\n\nThe reviewer also reviews the calculation of the gain/loss arising on disposal.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is  approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW617",
        "id": "C253",
        "name": "Review of bank reconciliation",
        "description": "Each period, the [name] reviews the bank reconciliation. \n\n[Once the review is complete and the queries raised have been dealt with to the reviewer's satisfaction, they document their authorization by [document how the reviewer indicates that the review is complete.]]"
    },
    {
        "riskId": "WCGW617",
        "id": "C320",
        "name": "Preparation of bank reconciliation",
        "description": "A bank reconciliation is prepared each period by [name], who is independent of those responsible for processing cash transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written-off, following  approval by [name]."
    },
    {
        "riskId": "WCGW617",
        "id": "C282",
        "name": "Invoice coding review",
        "description": "[The name] reviews [and authorizes] the coding of invoices. This involves reviewing [each invoice] and assessing whether the correct general ledger account coding has been applied to the item.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the review is  complete.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW617",
        "id": "C421",
        "name": "Management review of other receivables",
        "description": "Each period [the manager] reviews the schedule of other receivables.\n\n[The review considers whether the receivables are:\n- accurately recorded\n- classified appropriately\n- recoverable]\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW630",
        "id": "C286",
        "name": "Management review of new and amended leases",
        "description": "Each period [the manager] reviews the list of new leases.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW631",
        "id": "C301",
        "name": "Management review of lease obligations",
        "description": "Each period [the manager] reviews the schedule of lease obligations.\n\nThe review considers whether: \n- the lease payments have been recorded in accordance with the terms of the lease and the accouning treatment adopted for the lease.\n- the obligations on new and amended leases have been approperiatly added to the schedule.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW632",
        "id": "C283",
        "name": "Disclosure review - leases",
        "description": "Management has controls in place to help reduce the potential risks over the preparation of the disclosures as follows:\n[document management’s controls over the preparation of the disclosure, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used in the preparation of the disclosures.\n• consideration by appropriate levels of management of whether the disclosures in the financial statements  are in accordance with the requirements of the applicable financial reporting framework.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]\n\n[Where the disclosures include subjective elements, document management’s controls relating to the review and approval of the assumptions and data inputs by the appropriate levels of management and, where appropriate, those charged with governance.]"
    },
    {
        "riskId": "WCGW601",
        "id": "C282",
        "name": "Invoice coding review",
        "description": "[The name] reviews [and authorizes] the coding of invoices. This involves reviewing [each invoice] and assessing whether the correct general ledger account coding has been applied to the item.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the review is  complete.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW601",
        "id": "C269",
        "name": "Management review of PPE additions",
        "description": "Each period [the manager] reviews the schedule of property, plant and equipment additions from the PPE system.\n\nThe review considers the additions to confirm that the it is appropriate to capitalize the items and that the following are appropriate:\n- the details recorded for the asset are correct\n- the asset has been appropriately classified\n- the appropriate useful life and residual value has been identified and input for the asset\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW601",
        "id": "C319",
        "name": "Physical inspection of PPE",
        "description": "Each period [name] carries out a physical inspection of property, plant and equipment. This inspection is carried out by people other than those who have custody of the assets, maintain the PPE system or have custody of documents of title. \n\nThe inspection involves determining the existence of the assets, assessing whether they are in good condition and still in use. \n\nThe inspectors raise queries with the relevant individuals/ departments when: \n• an asset cannot be found.\n• an asset no longer appears to be in use or is in a damaged condition.\n• an asset is found that is not on the PPE system.\n\nAdjustments required to the PPE system are proposed by the inspection team. They are reviewed by [name] and are  posted by [name]. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW601",
        "id": "C258",
        "name": "Management review of depreciation expense",
        "description": "Each period [the manager] reviews the depreciation expense and supporting schedules and ensures the amount agrees to the general ledger.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW601",
        "id": "C244",
        "name": "Department head KPI review - expenses",
        "description": "Each period key performance indicators (KPIs) are prepared, reviewed, and compared to management expectations based on prior period, budget, forecasts and other relevant information. \n\nKPIs include: \n[List KPIs reviewed by the manager of the relevant department, such as:\n• all costs related to their department.\n• material variances from period to period.\n• material variances to budget.] \n\nThe reviewer identifies queries on KPIs regarding variances to expectation, such as fluctuations, outliers or unusual adjustments. The queries are raised with the appropriate person, who provides more detailed information where applicable.  \n\nAll queries are appropriately addressed [, and the reviewer evidences the completion of their review by signing the schedule of KPIs, indicating approval of the recorded amounts.]\n\nManagement has designed this control to detect and correct potential misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW611",
        "id": "C258",
        "name": "Management review of depreciation expense",
        "description": "Each period [the manager] reviews the depreciation expense and supporting schedules and ensures the amount agrees to the general ledger.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW611",
        "id": "C354",
        "name": "System configuration for depreciation calculations",
        "description": "The PPE system is configured in such a way as to ensure that the correct amount of depreciation is calculated based on the cost of the asset and the depreciation rate, method, useful life and residual value input to the system.\n\nThis is achieved by the system calculating the depreciation automatically based on the data input and the configuration of the system.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW611",
        "id": "C420",
        "name": "Management review of Excel depreciation calculation",
        "description": "Each period [the manager] reviews the calculation of depreciation performed using [Excel/ other application]\n\nThe review considers the [items checked by review]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW607",
        "id": "C270",
        "name": "Review of PPE system reconciliation",
        "description": "Each period the reconciliation of the PPE system to the general ledger is reviewed by [name].\n \n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete].]"
    },
    {
        "riskId": "WCGW607",
        "id": "C324",
        "name": "Preparation of PPE system reconciliation",
        "description": "Each period, the PPE system is reconciled to the general ledger by [name] who is independent of those processing transactions relating to property, plant and equipment.\n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written off, following authorization by [name].\n\nThis control determines whether the data in the general ledger matches the PPE system, but does not provide any assurance over the data in the PPE system."
    },
    {
        "riskId": "WCGW600",
        "id": "",
        "name": "",
        "description": ""
    },
    {
        "riskId": "WCGW1002",
        "id": "C450",
        "name": "Management review of capital expenditure on intangible assets",
        "description": "Each period [the manager] reviews the schedule of expenditure capitalized in relation to intangible assets.\n\nThe reviewer determines whether costs were appropriately capitalized in accordance with the entity's accounting policies related to capitalization of development  expenditure.  The reviewer also considers the suitability of the useful lives attached to the assets.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW1002",
        "id": "C451",
        "name": "Management review of amortization expense",
        "description": "Each period [the manager] reviews the amortization expense (and supporting schedules) and ensures the amount agrees to the general ledger.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW711",
        "id": "C451",
        "name": "Management review of amortization expense",
        "description": "Each period [the manager] reviews the amortization expense (and supporting schedules) and ensures the amount agrees to the general ledger.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW711",
        "id": "C452",
        "name": "System configuration for amortization calculations",
        "description": "The [intangible asset system] is configured in such a way as to ensure that the amortization is calculated in accordance with the amortization rate, method, useful life and residual value input to the system.\n\nThis is achieved by the system calculating the amotization automatically based on the data input and the configuration of the system.\n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW1004",
        "id": "C233",
        "name": "Estimate preparation controls - impairments of non-financial assets",
        "description": "( Estimate preparation controls )\n\nManagement has controls in place which address the points within the process at which a misstatement of the estimate could arise, as follows:\n\n[document the controls that management has over the preparation of the estimate, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used to develop the accounting estimate.\n• the review and approval of the assumptions and data inputs used in the development of the accounting estimate by the appropriate levels of management and, where appropriate, those charged with governance.\n• management's retrospective review of the outcome of accounting estimates made in prior periods.\n• consideration by appropriate levels of management of whether the accounting estimate is in accordance with the requirements of the applicable financial reporting framework. \n• the segregation of duties between those committing the entity to the underlying transactions and those responsible for making the accounting estimate.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]"
    },
    {
        "riskId": "WCGW1005",
        "id": "C453",
        "name": "Disclosure review - intangible assets",
        "description": "Management has controls in place to help reduce the potential risks over the preparation of the disclosures as follows:\n[document management’s controls over the preparation of the disclosure, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used in the preparation of the disclosures.\n• consideration by appropriate levels of management of whether the disclosures in the financial statements  are in accordance with the requirements of the applicable financial reporting framework.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]\n\n[Where the disclosures include subjective elements, document management’s controls relating to the review and approval of the assumptions and data inputs by the appropriate levels of management and, where appropriate, those charged with governance.]"
    },
    {
        "riskId": "WCGW712",
        "id": "C706",
        "name": "Estimate preparation control - fair value estimate \n(addresses V of Intangible assets)",
        "description": "Management has policies and procedures to help reduce the potential risks over the preparation of the estimate as follows:[document management’s policies and procedures in place over: \n- using qualified and experienced personnel including external experts; \n- review and approval of the relevant factors and the development of assumptions by higher levels of management; \n- the periodic review of the methods of developing the factors and assumptions; \n- a comparison of accounting estimates made in prior periods with results in subsequent periods; \n- the completeness accuracy and validity of the underlying data used in the preparation of the estimate.]"
    },
    {
        "riskId": "WCGW713",
        "id": "C707",
        "name": "Authorization of intangible asset disposals or retirements\n(addresses CEA of Intangible assets)",
        "description": "The [name] reviews each [disposal request for an intangible asset]. This involves  reviewing the [request] and assessing whether [\n- it has been requested by someone of appropriate seniority; \n- the rights are transferrable\n-  the asset is no longer in use, has been replaced or is obsolete; \n- the proposed purchaser (if any) is credit worthy or that the sales terms require payment up front;\n- the proposed sales price (if applicable) is appropriate for the asset being sold; and\n- if being retired, this is the most appropriate method of disposal.\nThe reviewer also reviews the calculation of the gain/ loss arising on disposal].\nOnce the review is complete and the queries raised/changes requested have been dealt with to the approvers satisfaction [the approver] [document how the approver indicates that the item is approved.] \nManagement has designed this control to prevent potential misstatements both intentional and unintentional greater than [amount]."
    },
    {
        "riskId": "WCGW714",
        "id": "C707",
        "name": "Authorization of intangible asset disposals or retirements\n(addresses CEA of Intangible assets)",
        "description": "The [name] reviews each [disposal request for an intangible asset]. This involves  reviewing the [request] and assessing whether [\n- it has been requested by someone of appropriate seniority; \n- the rights are transferrable\n-  the asset is no longer in use, has been replaced or is obsolete; \n- the proposed purchaser (if any) is credit worthy or that the sales terms require payment up front;\n- the proposed sales price (if applicable) is appropriate for the asset being sold; and\n- if being retired, this is the most appropriate method of disposal.\nThe reviewer also reviews the calculation of the gain/ loss arising on disposal].\nOnce the review is complete and the queries raised/changes requested have been dealt with to the approvers satisfaction [the approver] [document how the approver indicates that the item is approved.] \nManagement has designed this control to prevent potential misstatements both intentional and unintentional greater than [amount]."
    },
    {
        "riskId": "WCGW731",
        "id": "C731",
        "name": "Management review or accounting review of complex transactions",
        "description": "[The Finance Director or technical accounting department] reviews the accounting treatment of each business combination [based on set criteria addressing the size and complexity of the transaction] each period.\nThis analysis involves reviewing the sale and purchase agreement plus other relevant transaction documentation and assessing the appropriateness of the proposed accounting treatment, including post-acquisition adjustments where applicable. \nWhere the terms and conditions are consistent with an existing scenario from the entity’s accounting manual the reviewers assess whether the item is accounted for in accordance with this policy. Where the terms and conditions have not been anticipated by the existing accounting manual, the [technical accounting department] prepares an analysis of the particular circumstances and recommends an accounting treatment. \nOnce the review is complete and the queries raised have been dealt with to the reviewer’s satisfaction, [the reviewer] signs and dates the [accounting treatment documentation] as evidence of authorisation. \nManagement has designed this control to detect and correct potential misstatements both intentional and unintentional greater than [amount]."
    },
    {
        "riskId": "WCGW732",
        "id": "C732",
        "name": "Estimate preparation control – fair values in a business combination",
        "description": "Management has policies and procedures to help reduce the potential risks over the preparation of the estimate as follows:\n[document management’s policies and procedures in place over:\n• using qualified and experienced personnel, including external experts. \n• review and authorisation of the relevant factors and the development of assumptions by higher levels of management.\n• the periodic review of the methods of developing the factors and assumptions.\n• a comparison of accounting estimates made in prior periods with results in subsequent periods.\n• the completeness, relevance and accuracy of the underlying data used in the preparation of the estimate.]"
    },
    {
        "riskId": "WCGW 733",
        "id": "C733",
        "name": "Disclosure review - business combinations",
        "description": "Management has policies and procedures to help reduce the potential risks over the preparation of the disclosures as follows: \n[document management’s policies and procedures in place over:  \n• using qualified and experienced personnel, including external experts.\n• the completeness, accuracy and validity of the underlying data used in the preparation of the disclosures.] \n[Where the disclosures include subjective elements, document management’s policies and procedures in place over:  \n• review and authorisation approval of the relevant factors and the development of assumptions by higher levels of management. \n• the periodic review of the methods of developing the factors and assumptions.]"
    },
    {
        "riskId": "WCGW751",
        "id": "C500",
        "name": "Board review of related party list",
        "description": "The board reviews the list of related parties tabled at the periodic board meeting. \n\nThe board is provided with supporting documentation, which has been reconciled to the list.\n\nIf further review is deemed necessary, the board asks for clarification  or additional information and any decisions are deferred until the next meeting. \n\nEvidence of the board's approval is indicated in the minutes. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW751",
        "id": "C501",
        "name": "Management review of key employee related party confirmations",
        "description": "Each period [the manager] reviews the list of key employees to be circularized to declare related party relationships and transactions with the entity that they are aware of.  \n\nThe reviewer reviews each confirmations when it is received and considers whether all related party relationships and transactions are appropriately presented and disclosed in the financial statements.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction,  they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW761",
        "id": "C502",
        "name": "Management review of related party transactions",
        "description": "Each period [the manager] reviews a list of related party transactions.\n\nThe review considers the [items checked by review ]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW761",
        "id": "C503",
        "name": "Board review of related party transactions outside the normal course of business",
        "description": "The board reviews each related party transaction that is not in the normal course of busines at the periodic board  meeting. \n\nThe board is provided with supporting documentation, which has been reconciled to the [item to be reviewed].\n\nIf further review is deemed necessary, the board asks for clarification  or additional information and any decisions are deferred until the next meeting. \n\nEvidence of the board's approval is indicated in the minutes. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW761",
        "id": "C504",
        "name": "Accounting review - related party transactions",
        "description": "[The manager] reviews the accounting treatment for each related party transaction.\n\nThis analysis involves reviewing the related party transaction with any supporting documentation and analysing the facts in light of the applicable accounting framework. \n\nWhere the facts match an existing scenario from the entity's accounting manual, the manager assesses whether the item is accounted for in accordance with this policy. Where the facts have not been anticipated by the existing accounting manual, the reviewer reviews the analysis of the particular circumstances and the recommended accounting treatment. \n\n[Once the review is complete and the queries raised/changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.] ]\n\nManagement has designed this control to prevent potential unintentional misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW760",
        "id": "C505",
        "name": "Management review of the circumstances in which disclosures of related party relationships and transactions and outstanding balances between an entity and its related parties are required",
        "description": "[The name] reviews and authorizes each  related party relationship and transactions with related partiesThis involves  reviewing the related party transaction or balanceand assessing  whether [factors  reviewed/approved]. \n\n[Once the reviewer is satisfied that any queries raised or changes requested have been dealt with, they confirm their authorization by [document how authorized].]\n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW760",
        "id": "C506",
        "name": "Management review of the related party disclosure",
        "description": "Management has policies and procedures to help reduce the potential risks over the preparation of the disclosure  as follows: \n\n[document management’s policies and procedures in place  over: \n• using qualified and experienced personnel, including management's experts;• consideration by appropriate levels of management of whether the accounting disclosures are consistent with the operational plans of the entity;\n• the completeness, accuracy and validity of the underlying data used in the preparation of the  disclosure. \n\nWhere the disclosure includes subjective elements, document management's policies and procedures in place  over: • review and approval of the relevant factors and the development of assumptions by higher levels of management;• the periodic review of the methods of developing the factors and assumptions;• a comparison of the disclosures made in prior periods with the actual results;]"
    },
    {
        "riskId": "WCGW500",
        "id": "C305",
        "name": "Management review of tax calculation",
        "description": "Each period [the manager] reviews [the detailed tax computations, including the calculation of the effective tax rate, the tax reconciliation and the split between current and deferred taxes.]. \n\nThe review considers the [the tax schedules]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW500",
        "id": "C306",
        "name": "Management review of tax roll forward",
        "description": "Each period [the manager] reviews the schedule of the entity's tax assets and liabilities and payments due and examines whether this schedule agrees to the general ledger and to the statutory assessments received by the entity.\n\nThe review considers the tax roll-forward schedule.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW500",
        "id": "C402",
        "name": "Segregation of duties - treasury process",
        "description": "Management segregates the following activities: \n- cheque preparation\n- cheque signing\n- preparation of bank reconciliations\n- review of bank reconciliations\n- custody of cash receipts\n- posting of cash transactions to the general ledger\n- custody of blank cheques\n- debt authorization\n- [other activities]\n\n[Name] reviews each employee's responsibilities to ensure that they do not perform any inappropriate combination of these activities. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW803",
        "id": "C306",
        "name": "Management review of tax roll forward",
        "description": "Each period [the manager] reviews the schedule of the entity's tax assets and liabilities and payments due and examines whether this schedule agrees to the general ledger and to the statutory assessments received by the entity.\n\nThe review considers the tax roll-forward schedule.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW805",
        "id": "C227",
        "name": "Estimate preparation controls - recoverability of deferred tax assets",
        "description": "( Estimate preparation controls )\n\nManagement has controls in place which address the points within the process at which a misstatement of the estimate could arise, as follows:\n\n[document the controls that management has over the preparation of the estimate, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used to develop the accounting estimate.\n• the review and approval of the assumptions and data inputs used in the development of the accounting estimate by the appropriate levels of management and, where appropriate, those charged with governance.\n• management's retrospective review of the outcome of accounting estimates made in prior periods.\n• consideration by appropriate levels of management of whether the accounting estimate is in accordance with the requirements of the applicable financial reporting framework. \n• the segregation of duties between those committing the entity to the underlying transactions and those responsible for making the accounting estimate.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]"
    },
    {
        "riskId": "WCGW806",
        "id": "C307",
        "name": "Disclosure review - taxation",
        "description": "Management has controls in place to help reduce the potential risks over the preparation of the disclosures as follows:\n[document management’s controls over the preparation of the disclosure, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used in the preparation of the disclosures.\n• consideration by appropriate levels of management of whether the disclosures in the financial statements  are in accordance with the requirements of the applicable financial reporting framework.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]\n\n[Where the disclosures include subjective elements, document management’s controls relating to the review and approval of the assumptions and data inputs by the appropriate levels of management and, where appropriate, those charged with governance.]"
    },
    {
        "riskId": "WCGW804",
        "id": "C424",
        "name": "Estimate preparation controls - tax exposure items",
        "description": "( Estimate preparation controls )\n\nManagement has controls in place which address the points within the process at which a misstatement of the estimate could arise, as follows:\n\n[document the controls that management has over the preparation of the estimate, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used to develop the accounting estimate.\n• the review and approval of the assumptions and data inputs used in the development of the accounting estimate by the appropriate levels of management and, where appropriate, those charged with governance.\n• management's retrospective review of the outcome of accounting estimates made in prior periods.\n• consideration by appropriate levels of management of whether the accounting estimate is in accordance with the requirements of the applicable financial reporting framework. \n• the segregation of duties between those committing the entity to the underlying transactions and those responsible for making the accounting estimate.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]"
    },
    {
        "riskId": "WCGW804",
        "id": "C600",
        "name": "Management review of uncertain tax positions",
        "description": "Each period [the manager] reviews the schedule of uncertain tax positions taken by the entity\n\nThe review considers the schedule of uncertain tax positions.  The [manager] considers the legal basis for the entity's tax position, the likelihood it will be sustained if reviewed by the taxing authority, and whether the liability for uncertain tax positions has been calculated and recorded in accordance with the entity's accounting policies.\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, [ document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW802",
        "id": "C602",
        "name": "Review of reconciliation of tax provision to tax returns",
        "description": "Each period the reconciliation of the tax provision expense to the actual income tax calculation included in the entity's tax returns is reviewed by [name]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review  is complete.]]"
    },
    {
        "riskId": "WCGW802",
        "id": "C601",
        "name": "Preparation of reconciliation of tax provision to tax returns",
        "description": "Each period, [name] reconciles the income tax expense recorded in the general ledger to the actual income tax expense subsequently included in the entity's tax returns.\n\nThis preparer is independent of those who calculate the income tax expense."
    },
    {
        "riskId": "WCGW200",
        "id": "C340",
        "name": "Segregation of duties - purchases process",
        "description": "Management segregates the following activities: \n- supplier master data maintenance\n- requisition authorization\n- purchase order entry\n- purchase invoice entry\n- release supplier invoice\n- goods receipt on purchase order\n- material/ service master\n- service receipt entry\n- physical inventory adjustments\n- delivery process/ goods movement\n\n[Name] reviews each employee's responsibilities to ensure that they do not perform any inappropriate combination of these activities. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW200",
        "id": "C358",
        "name": "System access - purchases process",
        "description": "The purchases system is configured in such a way as to support the segregation of duties required in the process.\n\nThis is achieved by [details of how achieved]. \n\nManagement has designed this control to prevent potential intentional misstatements greater than [amount]."
    },
    {
        "riskId": "WCGW200",
        "id": "C245",
        "name": "Authorization of equity issue",
        "description": "The board reviews each new equity issue (including warrants, options, and treasury stock) [and their proposed accounting treatment(s)] at the periodic board  meeting. \n\nThe board is provided with supporting documentation, which has been reconciled to the [item to be reviewed].\n\nIf further review is deemed necessary, the board asks for clarification  or additional information and any decisions are deferred until the next meeting. \n\nEvidence of the board's approval is indicated in the minutes. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW200",
        "id": "C333",
        "name": "Preparation of reconciliation of statutory books to GL",
        "description": "Each period, [name] reconciles the [the share register and statutory books, including the list of shares/ stocks, options and warrants approved by the board during the period] to  the general ledger. \n\nThis preparer is independent of those responsible for recording equity transactions."
    },
    {
        "riskId": "WCGW200",
        "id": "C312",
        "name": "Review of reconciliation of statutory books to GL",
        "description": "Each period the reconciliation of [the share register and statutory books, including the list of shares/ stocks, options and warrants approved by the board during the period] to the general ledger is reviewed by [name]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review  is complete.]]"
    },
    {
        "riskId": "WCGW851",
        "id": "C253",
        "name": "Review of bank reconciliation",
        "description": "Each period, the [name] reviews the bank reconciliation. \n\n[Once the review is complete and the queries raised have been dealt with to the reviewer's satisfaction, they document their authorization by [document how the reviewer indicates that the review is complete.]]"
    },
    {
        "riskId": "WCGW851",
        "id": "C320",
        "name": "Preparation of bank reconciliation",
        "description": "A bank reconciliation is prepared each period by [name], who is independent of those responsible for processing cash transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written-off, following  approval by [name]."
    },
    {
        "riskId": "WCGW851",
        "id": "C333",
        "name": "Preparation of reconciliation of statutory books to GL",
        "description": "Each period, [name] reconciles the [the share register and statutory books, including the list of shares/ stocks, options and warrants approved by the board during the period] to  the general ledger. \n\nThis preparer is independent of those responsible for recording equity transactions."
    },
    {
        "riskId": "WCGW851",
        "id": "C312",
        "name": "Review of reconciliation of statutory books to GL",
        "description": "Each period the reconciliation of [the share register and statutory books, including the list of shares/ stocks, options and warrants approved by the board during the period] to the general ledger is reviewed by [name]. \n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review  is complete.]]"
    },
    {
        "riskId": "WCGW852",
        "id": "C253",
        "name": "Review of bank reconciliation",
        "description": "Each period, the [name] reviews the bank reconciliation. \n\n[Once the review is complete and the queries raised have been dealt with to the reviewer's satisfaction, they document their authorization by [document how the reviewer indicates that the review is complete.]]"
    },
    {
        "riskId": "WCGW852",
        "id": "C320",
        "name": "Preparation of bank reconciliation",
        "description": "A bank reconciliation is prepared each period by [name], who is independent of those responsible for processing cash transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written-off, following  approval by [name]."
    },
    {
        "riskId": "WCGW852",
        "id": "C421",
        "name": "Management review of other receivables",
        "description": "Each period [the manager] reviews the schedule of other receivables.\n\n[The review considers whether the receivables are:\n- accurately recorded\n- classified appropriately\n- recoverable]\n\n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review is complete.]] \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW853",
        "id": "C296",
        "name": "Review of reconciliation of shareholders funds",
        "description": "Each period the reconciliation of the opening shareholders'/ stockholders' funds to the closing position is reviewed by [name]. \n\n[Once the review is complete and the queries raised/changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review  is complete.]]"
    },
    {
        "riskId": "WCGW853",
        "id": "C328",
        "name": "Preparation of reconciliation of shareholders funds",
        "description": "Each period, [name] reconciles the opening shareholders'/ stockholders' funds to  the closing position. \n\nThis preparer is  independent of those responsible for recording equity transactions."
    },
    {
        "riskId": "WCGW441",
        "id": "C232",
        "name": "Estimate preparation controls - valuation of share-based payments",
        "description": "( Estimate preparation controls )\n\nManagement has controls in place which address the points within the process at which a misstatement of the estimate could arise, as follows:\n\n[document the controls that management has over the preparation of the estimate, such as those relating to:\n• the completeness, accuracy and relevance of the data inputs used to develop the accounting estimate.\n• the review and approval of the assumptions and data inputs used in the development of the accounting estimate by the appropriate levels of management and, where appropriate, those charged with governance.\n• management's retrospective review of the outcome of accounting estimates made in prior periods.\n• consideration by appropriate levels of management of whether the accounting estimate is in accordance with the requirements of the applicable financial reporting framework. \n• the segregation of duties between those committing the entity to the underlying transactions and those responsible for making the accounting estimate.\n• using qualified and experienced personnel, including management's experts and service organizations, where applicable.]\n\n[Additionally, document how the relevant factors are taken into account, including market and non-market conditions affecting the value of the share/ stock options and warrants.]"
    },
    {
        "riskId": "WCGW855",
        "id": "C253",
        "name": "Review of bank reconciliation",
        "description": "Each period, the [name] reviews the bank reconciliation. \n\n[Once the review is complete and the queries raised have been dealt with to the reviewer's satisfaction, they document their authorization by [document how the reviewer indicates that the review is complete.]]"
    },
    {
        "riskId": "WCGW855",
        "id": "C320",
        "name": "Preparation of bank reconciliation",
        "description": "A bank reconciliation is prepared each period by [name], who is independent of those responsible for processing cash transactions. \n\nAll differences greater than [amount] are followed up by the preparer and are either:\n• investigated and cleared before the reconciliation is finalized;\n• marked as to be followed up during the following period;\n• marked as to be written-off, following  approval by [name]."
    },
    {
        "riskId": "WCGW855",
        "id": "C287",
        "name": "Management review of payment file or cheque run",
        "description": "[The name] reviews and authorizes each [electronic funds transfer payment/ cheque run]. This involves reviewing the [electronic funds transfer file/ cheques] and assessing whether [factors reviewed/ approved]. \n\n[Once the review is complete and the queries raised have been dealt with to the approver's satisfaction, they [document how the approver indicates that the item is approved.]] \n\nManagement has designed this control to prevent potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "WCGW855",
        "id": "C337",
        "name": "Review of reconciliation of dividend expense to shareholders register",
        "description": "Each period the reconciliation of the dividend expense, including any unpaid amounts, to the shareholders' / stockholders' register and the payment file is reviewed by [name].\n \n[Once the review is complete and the queries raised/ changes requested have been dealt with to the reviewer's satisfaction, they [document how the reviewer indicates that the review  is complete.]]"
    },
    {
        "riskId": "WCGW855",
        "id": "C332",
        "name": "Preparation of reconciliation of dividend expense to shareholders register",
        "description": "Each period, [name] reconciles the dividend expense recorded, including any unpaid amounts, to  the shareholders' / stockholders' register.\n\nThis preparer is independent of those responsible for recording equity transactions."
    },
    {
        "riskId": "GBEQWCGW1",
        "id": "",
        "name": "",
        "description": ""
    },
    {
        "riskId": "GBEQWCGW2",
        "id": "GB208",
        "name": "Board review of equity issued using proceeds of loans",
        "description": "The [board] reviews each issuance of equity shares that is directly or indirectly financed by a loan from the entity at the periodic board meeting. \n\nThe board is provided with supporting documentation, which has been reconciled to the equity sub-ledger. The board is also provided the entity's accounting analysis, as well as documentation of the approval of the equity issuance by management, and the applicable policies and formal procedures established that govern the issuance of equity financed by the entity.\n\nIf further review is deemed necessary, the board asks for clarification or additional information and any decisions are deferred until the next meeting. \n\nEvidence of the board's approval is indicated in the minutes. \n\nManagement has designed this control to detect and correct potential misstatements, both intentional and unintentional, greater than [amount]."
    },
    {
        "riskId": "GBEQWCGW3",
        "id": "",
        "name": "",
        "description": ""
    },
    {
        "riskId": "WCGW854",
        "id": "",
        "name": "",
        "description": ""
    },
    {
        "riskId": "WCGW861",
        "id": "C861",
        "name": "Management review of capital disclosures",
        "description": "[Where the disclosure includes subjective elements, document management’s policies and procedures in place over: \n- review and approval of the relevant factors and the development of assumptions by higher levels of management, including defining reasonable ranges\n- the identification and testing of outliers.\n- the periodic review of the methods of developing the factors and assumptions.\n- a comparison of the disclosures made in prior periods with the actual results.]\nWe do not rely on the existence of signatures alone to evidence the operating effectiveness of a management review control."
    }
];