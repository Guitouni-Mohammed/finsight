# FinSight

**FinSight reads a company's financial statements from a PDF, scanned or digital, and turns them into checked figures, ratios, a health score and a written analysis.**

Upload a balance sheet and income statement (Moroccan CGNC or French PCG format). FinSight finds every line and its amounts for the current and previous year, checks that the balance sheet balances, computes the usual analysis ratios and scores the company out of 100. An AI model can write a commentary and answer questions about the document.




## Features

- **Reads digital and scanned PDFs.** Pages with a text layer are read directly (exact, instant). Scanned pages are rendered at 288 dpi and read with Tesseract OCR.
- **Rebuilds the tables.** Words are grouped into rows by position, amount columns are detected on each page, and the last two columns are read as year N and year N-1.
- **Understands accounting formats.** Asset and liability sides and the income statement (CPC) are told apart; totals such as `TOTAL II (F+G+H+I)` are mapped to the right key figures; negative amounts in parentheses are handled.
- **Checks itself.** Total assets = total liabilities for both years, net income in the balance sheet = net income in the income statement, missing key figures, low OCR confidence.
- **Ratios and a transparent score.** Nine ratios with reference thresholds; the 0–100 score shows how many points each axis earns.
- **Manual corrections and simulation.** Any key figure can be corrected; sliders show the effect of revenue, margin and debt changes.
- **AI analysis (optional).** Summary, risks with evidence, year-on-year changes, questions to ask management, and a Q&A tab. The model receives the extracted lines and computed ratios, never the PDF file.
- **Accounts.** Sign-up with email confirmation, login, password reset, password change, sign-out everywhere and account deletion.


## Quick start

Requirements: Node.js 22 (20.12 or later works), a free [Supabase](https://supabase.com) project. 
 In short:

```bash
npm install
cp .env.example .env.local        # fill in SUPABASE_URL and the two Supabase keys
npx supabase@2.122.0 login        # once
npx supabase@2.122.0 link --project-ref <your-project-ref>
npx supabase@2.122.0 db push      # creates the tables from supabase/migrations
npm run dev                       # http://localhost:3000
```

## License

[MIT](LICENSE) © Mohammed Guitouni
