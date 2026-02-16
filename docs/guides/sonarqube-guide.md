# SonarQube/SonarCloud Setup Guide

## SonarCloud Configuration

### Your SonarCloud Project
- **Organization:** `s-o-n-e-studios`
- **Project Key:** `S-O-N-E-Studios_Web-System`
- **Project Name:** `Web-System`

### Setup Steps

1. **Get Your SonarCloud Token:**
   - Go to https://sonarcloud.io
   - Sign in with your GitHub account
   - Navigate to: My Account > Security > Generate Tokens
   - Generate a token with name: `GitHub Actions`
   - Copy the token

2. **Add Token to GitHub Secrets:**
   - In your GitHub repository: Settings > Secrets and variables > Actions
   - Click "New repository secret"
   - Name: `SONAR_TOKEN`
   - Value: paste your token
   - Click "Add secret"

3. **Push to Trigger Analysis:**
   ```bash
   git push origin main
   ```

4. **View Results:**
   - https://sonarcloud.io/project/overview?id=S-O-N-E-Studios_Web-System

## Quality Gates

| Metric | Target | Description |
|--------|--------|-------------|
| Coverage | >80% | Percentage of code covered by tests |
| Duplications | <3% | Percentage of duplicated code |
| Code Smells | 0 | Maintainability issues |
| Bugs | 0 | Reliability issues |
| Vulnerabilities | 0 | Security issues |

## Running Analysis Locally

```bash
# Install SonarQube Scanner
npm install -g sonarqube-scanner

# Run tests with coverage
npm run test:ci

# Run analysis
npm run sonar
```

## Self-Hosted SonarQube (Alternative)

```bash
# Run SonarQube with Docker
docker run -d --name sonarqube \
  -p 9000:9000 \
  -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true \
  sonarqube:latest
```

Access at http://localhost:9000 (default: admin/admin)
