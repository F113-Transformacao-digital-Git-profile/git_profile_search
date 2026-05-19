# TestSprite AI Testing Report(MCP)

---

## 1️⃣ Document Metadata
- **Project Name:** git_profile_search
- **Date:** 2026-05-15
- **Prepared by:** TestSprite AI Team

---

## 2️⃣ Requirement Validation Summary

### Requirement: GitHub User Search
- **Description:** Allows visitors to search for a GitHub username and view profile information, loading states, and error handling.

#### Test TC001 Searches for a valid user and shows the profile details
- **Test Code:** [TC001_Searches_for_a_valid_user_and_shows_the_profile_details.py](./TC001_Searches_for_a_valid_user_and_shows_the_profile_details.py)
- **Test Error:** 
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c7499f67-3649-4746-8085-cde8bbe20c75/6a745d55-317a-40dc-9445-e703fbe45a1d
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Search flow works correctly for valid usernames. Loading state appears and the profile card displays avatar, login, location, followers, and following as expected.

---

#### Test TC002 Shows a not-found state for an unknown user
- **Test Code:** [TC002_Shows_a_not_found_state_for_an_unknown_user.py](./TC002_Shows_a_not_found_state_for_an_unknown_user.py)
- **Test Error:** 
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c7499f67-3649-4746-8085-cde8bbe20c75/0e8863e3-740f-490a-8cc7-c6ad4ee09def
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** The app correctly shows "Usuário não encontrado!" when the GitHub API returns 404 for a nonexistent username.

---

#### Test TC003 Searches with the keyboard and opens the profile repositories view
- **Test Code:** [TC003_Searches_with_the_keyboard_and_opens_the_profile_repositories_view.py](./TC003_Searches_with_the_keyboard_and_opens_the_profile_repositories_view.py)
- **Test Error:** 
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c7499f67-3649-4746-8085-cde8bbe20c75/b8dc3f4c-4c7e-4c90-b772-1314493cadc9
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Enter key submission and navigation to the repositories view work as intended from the profile card link.

---

#### Test TC005 Rejects an empty search submission
- **Test Code:** [TC005_Rejects_an_empty_search_submission.py](./TC005_Rejects_an_empty_search_submission.py)
- **Test Error:** Submitting an empty search did not show a validation error — the app showed a 'user not found' message instead.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c7499f67-3649-4746-8085-cde8bbe20c75/9c295e5e-0fc7-435d-997e-f92e4d5cebc6
- **Status:** ❌ Failed
- **Severity:** MEDIUM
- **Analysis / Findings:** `Search.tsx` does not validate empty input before calling `loadUser`. An empty string triggers a GitHub API request that returns 404, showing the generic "Usuário não encontrado!" message instead of a client-side validation message. Add a guard in `loadUser` or `Search` to block empty/whitespace-only submissions and display a dedicated validation message.

---

### Requirement: View Top Repositories
- **Description:** Displays the top 5 starred repositories for a user, supports direct URL access, external GitHub links, and back navigation.

#### Test TC004 Opens the top five repositories for a user from the profile
- **Test Code:** [TC004_Opens_the_top_five_repositories_for_a_user_from_the_profile.py](./TC004_Opens_the_top_five_repositories_for_a_user_from_the_profile.py)
- **Test Error:** 
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c7499f67-3649-4746-8085-cde8bbe20c75/2e8f55dd-0cce-41b5-a883-a3400a85553c
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Navigation from profile to `/repos/:username` works and the top 5 repositories sorted by stars are displayed correctly.

---

#### Test TC006 Shows repository details for each top repository
- **Test Code:** [TC006_Shows_repository_details_for_each_top_repository.py](./TC006_Shows_repository_details_for_each_top_repository.py)
- **Test Error:** 
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c7499f67-3649-4746-8085-cde8bbe20c75/ac3cd20d-e9c5-4883-851a-05b851e84da2
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Each repository card shows name, language, stars, and forks as expected in `Repo.tsx`.

---

#### Test TC007 Returns to the profile from the repositories view
- **Test Code:** [TC007_Returns_to_the_profile_from_the_repositories_view.py](./TC007_Returns_to_the_profile_from_the_repositories_view.py)
- **Test Error:** Returning from the repositories view did not restore the previously viewed profile. After clicking 'Voltar', the page shows the search input and heading instead of the octocat profile card.
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c7499f67-3649-4746-8085-cde8bbe20c75/0bf51100-909d-4c91-b7be-7eb057a46fb4
- **Status:** ❌ Failed
- **Severity:** MEDIUM
- **Analysis / Findings:** `BackBtn.tsx` uses `navigate(-1)`, which returns to `/` but does not preserve the user profile state (stored only in React state on `Home.tsx`). When navigating back, the profile is lost because state is not persisted in URL params or global state. Consider navigating to `/` with the username in state/query, or using a link to `/` that re-fetches the user.

---

#### Test TC008 Loads the repositories view directly for a username
- **Test Code:** [TC008_Loads_the_repositories_view_directly_for_a_username.py](./TC008_Loads_the_repositories_view_directly_for_a_username.py)
- **Test Error:** 
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c7499f67-3649-4746-8085-cde8bbe20c75/8a25a9ba-0d85-4bf8-ae99-3a74c721df32
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** Direct navigation to `/repos/:username` loads and displays repositories without requiring a prior search.

---

#### Test TC009 Opens a repository in GitHub from the repositories view
- **Test Code:** [TC009_Opens_a_repository_in_GitHub_from_the_repositories_view.py](./TC009_Opens_a_repository_in_GitHub_from_the_repositories_view.py)
- **Test Error:** 
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/c7499f67-3649-4746-8085-cde8bbe20c75/71535e1f-490d-4335-8184-fd329fdfd5a9
- **Status:** ✅ Passed
- **Severity:** LOW
- **Analysis / Findings:** The "Ver código" link opens the GitHub repository in a new tab via `target="_blank"` as expected.

---

## 3️⃣ Coverage & Matching Metrics

- **77.78%** of tests passed

| Requirement            | Total Tests | ✅ Passed | ❌ Failed |
|------------------------|-------------|-----------|-----------|
| GitHub User Search     | 4           | 3         | 1         |
| View Top Repositories  | 5           | 4         | 1         |
| **Total**              | **9**       | **7**     | **2**     |

---

## 4️⃣ Key Gaps / Risks

> 77.78% of tests passed (7/9). Core search and repository listing flows work well.

**Gaps identified:**
1. **Empty search validation (TC005):** No client-side guard prevents empty searches; users see a misleading "not found" error instead of input validation.
2. **Back navigation state loss (TC007):** `navigate(-1)` returns to home but profile data in React state is lost, breaking the expected back-to-profile UX.
3. **GitHub API rate limits:** Without `VITE_GITHUB_TOKEN`, repeated automated or manual searches may hit rate limits during testing or heavy use.

**Recommended fixes:**
- Add empty/whitespace validation in `Search.tsx` before calling `loadUser`.
- Replace `navigate(-1)` in `BackBtn.tsx` with explicit navigation that preserves or re-loads the user profile (e.g. route state or query param with username).
